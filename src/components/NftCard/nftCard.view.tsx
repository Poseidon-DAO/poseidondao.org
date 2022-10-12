import LoadingSpinner from "components/LoadingSpinner";
import { INft } from "types";
import Tilt from "react-parallax-tilt";
import { Colors } from "components/UI_KIT/colors";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function NFTCard({ nft }: { nft: INft }) {
  const isLoading = nft?.image.content.length;
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.01}
      transitionEasing={"cubic-bezier(0.2,.98,.52,.99)"}
    >
      <Flex
        flexDir="column"
        alignItems="center"
        w="100%"
        h="100%"
        __css={{
          position: "relative",
          background: "inherit",
          borderRadius: "0.2rem",
          marginBottom: "1rem",
          backgroundPosition: "center center",
          boxShadow: "inset 0 0 1rem 0 rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.5s",
          border: "white solid 1px",
          willChange: "transform",
          "&:hover": { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" },
          "&:before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "inherit",
            boxShadow: "inset 0 0 50px 0 rgba(255, 255, 255, 0.2)",
            filter: "blur(5px)",
          },
        }}
      >
        {isLoading ? (
          <>
            <Image
              w="100%"
              h="50%"
              objectFit="contain"
              src={nft.image.content}
              alt={nft.name}
            />
            <Flex
              flexDir="column"
              maxW="100%"
              p="5% 0.5rem"
              color={Colors.white.primary}
            >
              <Text
                fontSize="3xl"
                fontWeight="bold"
                m="0 0 0.2rem 0"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                {nft.name}
              </Text>
              <Text fontSize="sm">{nft.description}</Text>
            </Flex>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Flex>
    </Tilt>
  );
}
