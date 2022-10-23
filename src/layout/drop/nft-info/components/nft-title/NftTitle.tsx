import { Heading } from "@chakra-ui/react";

const NftTitle = ({ title }: { title: string }) => {
  return <Heading fontSize={{ sm: "6xl", lg: "4xl" }}>{title}</Heading>;
};

export { NftTitle };
