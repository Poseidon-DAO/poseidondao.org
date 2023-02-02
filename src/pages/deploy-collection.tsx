import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Container } from "components";

const DeployCollection = () => {
  return (
    <Container>
      <Box pt="12vh">
        <Heading fontSize="5xl" mb="4">
          Deploy Collection
        </Heading>

        <Text fontSize="2xl" lineHeight="1.2">
          Drops with a limited supply and a limited amount of time, in
          collaboration with valuable emerging artists. The participants are
          incentivized to participate during the drop becuase they will
          automatically receive a certain amount of PDN tokens back in airdrop.
          The goal of the initiative is to encourage token distribution.
        </Text>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={["100px", "100px", "20px", "20px", "50px"]}
          py="40px"
        >
          <GridItem>
            <Flex flexDir="column" borderWidth="1px" py="20px" px="15%">
              <Box w="100%" h="400px" pos="relative">
                <Image src="/img/drop-collection/col-5.jpeg" layout="fill" />
              </Box>

              <Box my="6">
                <Text fontSize="lg">Yu Cai</Text>
                <Text fontSize="lg" noOfLines={1}>
                  𝕋𝕙𝕖 𝔹𝕒𝕣 𝕒𝕥 𝕥𝕙𝕖 𝕋𝕣𝕒𝕚𝕟 𝕊𝕥𝕒𝕥𝕚𝕠𝕟
                </Text>
              </Box>

              <Flex justifyContent="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 1px 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/1"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/open-sea.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/1"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/looksrare.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 1px"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:1"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/rarible.svg"
                    />
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column" borderWidth="1px" py="20px" px="15%">
              <Box w="100%" h="400px" pos="relative">
                <Image src="/img/drop-collection/col-2.jpeg" layout="fill" />
              </Box>

              <Box my="6">
                <Text fontSize="lg">niroperrone</Text>
                <Text fontSize="lg" noOfLines={1}>
                  Assets are Fried
                </Text>
              </Box>

              <Flex justifyContent="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 1px 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/2"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/open-sea.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/2"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/looksrare.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 1px"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:2"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/rarible.svg"
                    />
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column" borderWidth="1px" py="20px" px="15%">
              <Box w="100%" h="400px" pos="relative">
                <Image src="/img/drop-collection/col-1.jpeg" layout="fill" />
              </Box>

              <Box my="6">
                <Text fontSize="lg">Orkhan Isayev</Text>
                <Text fontSize="lg" noOfLines={1}>
                  VICTORY Aeromobile - Artemis Classic Y5
                </Text>
              </Box>

              <Flex justifyContent="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 1px 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/3"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/open-sea.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/3"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/looksrare.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 1px"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:3"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/rarible.svg"
                    />
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column" borderWidth="1px" py="20px" px="15%">
              <Box w="100%" h="400px" pos="relative">
                <Image src="/img/drop-collection/col-3.jpeg" layout="fill" />
              </Box>

              <Box my="6">
                <Text fontSize="lg">Laprisamata</Text>
                <Text fontSize="lg" noOfLines={1}>
                  Saint in the Blue Desert
                </Text>
              </Box>

              <Flex justifyContent="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 1px 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/4"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/open-sea.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/4"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/looksrare.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 1px"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:4"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/rarible.svg"
                    />
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column" borderWidth="1px" py="20px" px="15%">
              <Box w="100%" h="400px" pos="relative">
                <Image src="/img/drop-collection/col-4.png" layout="fill" />
              </Box>

              <Box my="6">
                <Text fontSize="lg">FourLeafClover</Text>
                <Text fontSize="lg" noOfLines={1}>
                  A World of Hope
                </Text>
              </Box>

              <Flex justifyContent="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 1px 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/5"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/open-sea.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 0"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/5"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/looksrare.svg"
                    />
                  </a>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderWidth="1px 0 0 1px"
                  w="50px"
                  h="50px"
                  cursor="pointer"
                >
                  <a
                    target="_blank"
                    href="https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:5"
                  >
                    <Image
                      width={16}
                      height={16}
                      src="/img/marketplace/rarible.svg"
                    />
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default DeployCollection;
