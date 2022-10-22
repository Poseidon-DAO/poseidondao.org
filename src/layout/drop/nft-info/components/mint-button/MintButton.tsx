import { Button } from "@chakra-ui/react";

const MintButton = () => {
  return (
    <Button
      w="100%"
      minH={{ sm: "84px", lg: "54px" }}
      borderRadius={0}
      bg="brand.blue"
      fontSize={{ sm: "4xl", lg: "md" }}
    >
      MINT
    </Button>
  );
};

export { MintButton };
