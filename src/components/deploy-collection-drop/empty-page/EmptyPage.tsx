import { FC } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Container } from "components/container";
import Link from "next/link";

interface IEmptyPageProps {}

const EmptyPage: FC<IEmptyPageProps> = () => {
  return (
    <Container>
      <Flex h="100vh" alignItems="center">
        <Flex w="65%" h="400px">
          <Box w="400px" pos="relative">
            <Image src="/img/drop-collection/col-5.jpeg" layout="fill" />
          </Box>

          <Box w="400px" objectFit="contain" pos="relative" marginLeft="-15%">
            <Image src="/img/drop-collection/col-2.jpeg" layout="fill" />
          </Box>

          <Box w="400px" objectFit="contain" pos="relative" marginLeft="-15%">
            <Image src="/img/drop-collection/col-1.jpeg" layout="fill" />
          </Box>
          <Box w="400px" objectFit="contain" pos="relative" marginLeft="-15%">
            <Image src="/img/drop-collection/col-3.jpeg" layout="fill" />
          </Box>
          <Box
            w="400px"
            objectFit="contain"
            pos="relative"
            marginLeft="-15%"
            zIndex={2}
          >
            <Image src="/img/drop-collection/col-4.png" layout="fill" />
          </Box>
        </Flex>

        <Box w="35%" textAlign="center">
          <Text fontSize="5xl" lineHeight="1">
            No deploy collection <br /> drop planned.
          </Text>

          <Link href="/deploy-collection">
            <Button size="xl" w="240px" mt="10">
              SEE COLLECTION
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};

export { EmptyPage };
