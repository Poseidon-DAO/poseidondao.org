type ArgsType = {
  contractAddress: string;
  contractEtherscanLink: string;
  tokenType: "ERC721" | "ERC1155";
  startDate: string;
  endDate: string;
};

type MakeNFTDataFn = (args: ArgsType) => {
  id: string;
  label: string;
  text: string;
  link: string;
  truncate: boolean;
}[];

const makeNftData: MakeNFTDataFn = ({
  contractAddress,
  contractEtherscanLink,
  tokenType,
  startDate,
  endDate,
}) => [
  {
    id: "1",
    label: "CONTRACT ADDRESS",
    text: contractAddress,
    link: contractEtherscanLink,
    truncate: true,
    showLinkIcon: true,
  },
  {
    id: "2",
    label: "TOKEN STANDARD",
    text: tokenType,
    link: "",
    truncate: false,
    showLinkIcon: false,
  },
  {
    id: "3",
    label: "BLOCKCHAIN",
    text: "ETHEREUM",
    link: "",
    truncate: false,
    showLinkIcon: false,
  },
  {
    id: "4",
    label: "START DATE",
    text: startDate,
    link: "",
    truncate: false,
    showLinkIcon: false,
  },
  {
    id: "5",
    label: "END DATE",
    text: endDate,
    link: "",
    truncate: false,
    showLinkIcon: false,
  },
];

export { makeNftData };
