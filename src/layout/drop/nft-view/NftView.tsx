import { Box, Flex, Image, Tooltip } from "@chakra-ui/react";
import { FC, MouseEventHandler, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, IoMdClose } from "react-icons/io";

interface INftViewProps {
  expanded: boolean;
  onExpand: MouseEventHandler<HTMLDivElement> | undefined;
}

const NftView: FC<INftViewProps> = ({ expanded, onExpand }) => {
  return (
    <Box w="100%" h="100%" pos="relative">
      <Image
        src="https://onlinepngtools.com/images/examples-onlinepngtools/clouds-transparent.png"
        objectFit={expanded ? "contain" : "cover"}
        objectPosition="center"
        w="100%"
        h="100%"
        border="0.5px solid"
        borderColor="brand.link"
      />

      <Box
        {...(expanded ? { top: 4 } : { bottom: 4 })}
        pos="absolute"
        right={4}
        color="brand.text"
        onClick={onExpand}
      >
        <Tooltip label={expanded ? "Close" : "Full Screen"}>
          <Flex
            w={42}
            h={42}
            transform={`rotate(${expanded ? 0 : 45}deg)`}
            borderRadius="full"
            bg="whiteAlpha.50"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="all .1s ease-in-out"
            _hover={{ transform: `scale(1.1) rotate(${expanded ? 0 : 45}deg)` }}
          >
            {expanded ? (
              <IoMdClose size={30} />
            ) : (
              <>
                <IoIosArrowUp size={30} />
                <IoIosArrowDown size={30} />
              </>
            )}
          </Flex>
        </Tooltip>
      </Box>
    </Box>
  );
};

export { NftView };
