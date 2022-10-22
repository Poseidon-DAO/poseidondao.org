type MakeNFTDataFn = () => {
  id: string;
  label: string;
  text: string;
  link: string;
  truncate: boolean;
}[];

const makeNftData: MakeNFTDataFn = () => [
  {
    id: "1",
    label: "CONTRACT ADDRESS",
    text: "0x232A68a51D6e07357ae025D2a459c16077327102",
    link: "https://etherscan.io/address/0x232a68a51d6e07357ae025d2a459c16077327102",
    truncate: true,
    showLinkIcon: true,
  },
  {
    id: "2",
    label: "TOKEN STANDARD",
    text: "ERC1155",
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
    text: "2022-09-07",
    link: "",
    truncate: false,
    showLinkIcon: false,
  },
  {
    id: "5",
    label: "END DATE",
    text: "2022-09-17",
    link: "",
    truncate: false,
    showLinkIcon: false,
  },
];

export { makeNftData };
