import {
  useAccount,
  useBlockNumber,
  useContractReads,
  useProvider,
} from "wagmi";
import { getBasicContractConfig } from "contracts/utils";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  addSeconds,
  differenceInDays,
  differenceInHours,
  differenceInSeconds,
  fromUnixTime,
} from "date-fns";

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
  const [blockTimeDiffInSeconds, setBlockTimeDiffInSeconds] =
    useState<number>(0);

  const { data: lastBlock } = useBlockNumber();
  const provider = useProvider();
  const { address } = useAccount();
  const indexes = Array.from(Array(vestLength).keys());

  function formatTime() {
    if (!!timeToNextVestInDays && timeToNextVestInDays > 1) {
      return `~ ${timeToNextVestInDays} days`;
    }

    if (timeToNextVestInDays === 1) {
      return `~ ${timeToNextVestInDays} day`;
    }

    if (!!timeToNextVestInSeconds) {
      return `~ ${differenceInHours(
        timeToNextVestInSeconds,
        new Date()
      )} hours`;
    }

    return "";
  }

  function getNextUnexpiredVests(vests: Vest[]) {
    const vestsCopy = [...vests];

    if (!vestsCopy.length) return [];

    vestsCopy.sort((a, b) =>
      a?.expirationBlockHeight < b?.expirationBlockHeight ? -1 : 1
    );

    return vestsCopy;
  }

  const query = useContractReads({
    contracts: indexes?.map((vestId) => ({
      ...getBasicContractConfig("getVestMetaData"),
      args: [vestId, address],
    })),
    enabled: !!indexes.length && !!address && enabled,
    watch: true,
  });

  const queryWithoutNulls = query.data?.filter(Boolean) || [];

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

  const sortedUnExpiredVests = getNextUnexpiredVests(unexpiredVests);

  const timeToNextVestInSeconds = !!sortedUnExpiredVests.length
    ? addSeconds(
        new Date(),
        (sortedUnExpiredVests[0]?.expirationBlockHeight - lastBlock!) *
          blockTimeDiffInSeconds
      )
    : undefined;

  const timeToNextVestInDays = !!timeToNextVestInSeconds
    ? differenceInDays(timeToNextVestInSeconds, new Date())
    : undefined;

  useEffect(() => {
    async function getTimeStamp(lastBlock: number) {
      const block = await provider.getBlock(lastBlock!);
      return block?.timestamp;
    }

    let ts1: any;
    let ts2: any;

    if (!!lastBlock) {
      getTimeStamp(lastBlock)
        .then((firstTs) => {
          ts1 = firstTs;
          return getTimeStamp(lastBlock! - 1);
        })
        .then((secondTs) => {
          ts2 = secondTs;
        })
        .finally(() => {
          const blockDifference = differenceInSeconds(
            fromUnixTime(ts1),
            fromUnixTime(ts2)
          );
          setBlockTimeDiffInSeconds(blockDifference);
        });
    }
  }, [lastBlock]);

  return {
    vestMetadata: vestsMetadata,
    vestLengthStatus: query.status,
    totalVestedAmount,
    totalExpiredVestedAmount,
    expiredVestIds,
    sortedUnExpiredVests,
    timeToNextVestString: formatTime(),
  };
}

export { useVestMetadata };
