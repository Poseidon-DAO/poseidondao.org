import { Box } from "@chakra-ui/react";
import { Image } from "evergreen-ui";
import { ProviderTypes } from "types";
interface ProviderProps {
  icon: string;
  name: ProviderTypes;
  onClick: (provider: ProviderTypes) => void;
}

export default function Provider({ icon, name, onClick }: ProviderProps) {
  return (
    <Box
      h="10rem"
      w="10rem"
      margin="0 1rem"
      borderRadius="5px"
      cursor="pointer"
      _hover={{
        backgroundColor: "rgba(211, 211, 211, 0.6)",
        boxShadow: "inset",
      }}
      onClick={() => onClick(name)}
    >
      <Image
        src={icon}
        alt={name}
        style={{ objectFit: "cover" }}
        height="100%"
      />
    </Box>
  );
}
