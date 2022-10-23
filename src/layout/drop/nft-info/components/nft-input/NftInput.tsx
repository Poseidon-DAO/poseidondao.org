import { type FC, type ReactNode } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

import { truncateAddress } from "utils";

interface INftInfoInputProps {
  link?: string;
  label?: string;
  text: string | ReactNode;
  truncate?: boolean;
  showLinkIcon?: boolean;
}

const NftInput: FC<INftInfoInputProps> = ({
  link = "",
  label,
  text,
  truncate = false,
  showLinkIcon = false,
}) => {
  function handleClick() {
    window.open(link, "_blank");
  }

  return (
    <Button
      variant="unstyled"
      w="100%"
      h="auto"
      minH={{ sm: "84px", lg: "54px" }}
      borderRadius={0}
      border="0.5px solid"
      borderColor="brand.line"
      pl={2}
      pr={2}
      py={1}
      _focus={{ outline: "none" }}
      isDisabled={!link}
      _disabled={{ cursor: !!link ? "pointer" : "default" }}
      onClick={handleClick}
      boxSizing="border-box"
    >
      <Flex justifyContent="space-between" alignItems="center">
        {label && (
          <Text
            fontSize={{ sm: "3xl", lg: "xs" }}
            fontWeight="normal"
            color="brand.line"
          >
            {label}
          </Text>
        )}
        {showLinkIcon && (
          <Box>
            <FiExternalLink size={10} />
          </Box>
        )}
      </Flex>

      {typeof text === "string" ? (
        <Text
          fontSize={{ sm: "4xl", lg: "lg" }}
          textAlign="left"
          color="brand.text"
        >
          {truncate ? truncateAddress(text as string) : text}
        </Text>
      ) : (
        text
      )}
    </Button>
  );
};

export { NftInput };
