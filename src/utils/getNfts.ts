import { fetchNftData } from "apis";
import Actions from "redux/actions";
import store from "redux/store";
import { INft, INftFetch } from "types";

export const transformImg = async (item: INft, allData: INftFetch) => {
  try {
    if (item?.image) {
      const response = await fetch(
        item.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
      const image = await response.blob();
      const content = await URL.createObjectURL(image);
      const contentType = await response.headers.get("content-type");
      return {
        ...allData,
        ...item,
        image: {
          content,
          contentType,
        },
      };
    }
  } catch (error) {
    console.error(error, "Error with getting the collectible image.");
  }
};

export async function getNfts(nftList: INftFetch[]) {
  const nftData: INft[] = [];
  if (!nftList.length) return;

  await Promise.all(
    nftList.map((item) =>
      fetchNftData(item.token_uri)
        .then(async (response: INft) => {
          const nft = await transformImg(response, item);
          if (nft) nftData.push(nft);
        })
        .catch((e) => console.error(e))
    )
  );
  store.dispatch(Actions.WalletActions.UpdateNfts.success(nftData));
}
