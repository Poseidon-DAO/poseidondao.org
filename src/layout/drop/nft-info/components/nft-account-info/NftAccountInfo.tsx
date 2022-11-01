import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

import OpenSeaIconBW from "assets/images/opensea-bw.png";
import FoundationIconBW from "assets/images/foundation-bw.webp";

const NftAccountInfo = () => {
  return (
    <Flex alignItems="center">
      <Box>
        <Avatar
          size="sm"
          icon={<></>}
          bg="linear-gradient(
              340deg,
              hsl(240deg 100% 20%) 0%,
              hsl(286deg 100% 21%) 12%,
              hsl(311deg 100% 25%) 27%,
              hsl(325deg 100% 34%) 43%,
              hsl(334deg 100% 40%) 57%,
              hsl(346deg 83% 51%) 68%,
              hsl(6deg 98% 61%) 77%,
              hsl(22deg 100% 57%) 84%,
              hsl(37deg 100% 50%) 91%,
              hsl(46deg 100% 50%) 96%,
              hsl(55deg 100% 50%) 100%
            );"
        />
      </Box>

      <Box ml={2}>
        <Text fontSize={{ sm: "4xl", lg: "lg" }}>alphacentaurikid.eth</Text>

        <Flex alignItems="center" mt={1} mb={2}>
          <Image
            src={FoundationIconBW.src}
            h={{ sm: 6, lg: 3.5 }}
            objectFit="fill"
          />
          <Image
            src={OpenSeaIconBW.src}
            w={{ sm: 6, lg: 3.5 }}
            h={{ sm: 6, lg: 3.5 }}
            ml={2}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export { NftAccountInfo };
