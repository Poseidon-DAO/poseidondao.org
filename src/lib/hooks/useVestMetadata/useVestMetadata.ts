import {
  useAccount,
  useBlockNumber,
  useContractReads,
  useProvider,
} from "wagmi";
import { getBasicContractConfig } from "contracts/utils";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface IUseVestMetadata {
  vestLength?: number | null;
  enabled?: boolean;
}

interface Vest {
  amount: string;
  expirationBlockHeight: number;
  vestIndex: number;
}

function useVestMetadata({
  vestLength = 0,
  enabled = true,
}: IUseVestMetadata = {}) {
  const [lastUnexpiredVestTimestamp, setLastUnexpiredVestTimestamp] = useState<
    string | number
  >("");

  const { data: lastBlock } = useBlockNumber();
  const provider = useProvider();
  const { address } = useAccount();
  const indexes = Array.from(Array(vestLength).keys());

  const query = useContractReads({
    contracts: indexes?.map((vestId) => ({
      ...getBasicContractConfig("getVestMetaData"),
      args: [vestId, address],
    })),
    enabled: !!indexes.length && !!address && enabled,
    watch: true,
  });

  const queryWithoutNulls = query.data?.filter(Boolean);

  const vestsMetadata = queryWithoutNulls!.map((vestMetadata, index) => {
    return {
      amount: ethers.utils.formatEther(vestMetadata[0]),
      expirationBlockHeight: Number(vestMetadata[1]),
      vestIndex: index,
    };
  });

  const totalVestedAmount = vestsMetadata.reduce((acc, current) => {
    return acc + Number(current?.amount);
  }, 0);

  const totalExpiredVestedAmount = vestsMetadata.reduce((acc, current) => {
    if (!current?.expirationBlockHeight) return acc;

    if (lastBlock! >= current?.expirationBlockHeight) {
      return acc + Number(current?.amount);
    }

    return acc;
  }, 0);

  const expiredVestIds = vestsMetadata.reduce<number[]>((acc, current) => {
    if (!current?.expirationBlockHeight) return acc;

    if (lastBlock! >= current.expirationBlockHeight) {
      return [...acc, current?.vestIndex];
    }

    return acc;
  }, []);

  const unexpiredVests = vestsMetadata.filter(
    (vest) =>
      !!vest?.expirationBlockHeight && vest?.expirationBlockHeight > lastBlock!
  );

  function getNextUnexpiredVest(vests: Vest[]) {
    const vestsCopy = [...vests];

    if (!vestsCopy.length) return;

    vestsCopy.sort((a, b) =>
      a?.expirationBlockHeight < b?.expirationBlockHeight ? -1 : 1
    );

    return vestsCopy[0];
  }

  const nextUnexpiredVest = getNextUnexpiredVest(unexpiredVests);

  useEffect(() => {
    async function getTimeStamp(lastBlock: number) {
      const block = await provider.getBlock(lastBlock!);
      return block?.timestamp;
    }

    if (!!lastBlock) {
      getTimeStamp(lastBlock)
        .then((timestamp) => {
          console.log("first", timestamp, lastBlock);
          return getTimeStamp(lastBlock! - 1);
        })
        .then((ts) => {
          console.log("second", ts, lastBlock - 1);
        });
    }
  }, [lastBlock]);

  // useEffect(() => {
  //   async function getTimeStamp(vest: Vest) {
  //     const block = await provider.getBlock(lastBlock!);
  //     return block?.timestamp;
  //   }

  //   if (!!nextUnexpiredVest) {
  //     getTimeStamp(nextUnexpiredVest).then((timestamp) => {
  //       setLastUnexpiredVestTimestamp(timestamp);
  //     });
  //   }
  // }, [nextUnexpiredVest?.vestIndex]);

  return {
    vestMetadata: vestsMetadata,
    vestLengthStatus: query.status,
    totalVestedAmount,
    totalExpiredVestedAmount,
    expiredVestIds,
    nextUnexpiredVest,
    lastUnexpiredVestTimestamp,
  };
}

export { useVestMetadata };
