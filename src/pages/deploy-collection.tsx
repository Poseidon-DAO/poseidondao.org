import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import { Container } from "components";
import { DeployCollectionCard } from "components/deploy-collection";

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
            <DeployCollectionCard
              artist="Yu Cai"
              collectionName=" 𝕋𝕙𝕖 𝔹𝕒𝕣 𝕒𝕥 𝕥𝕙𝕖 𝕋𝕣𝕒𝕚𝕟 𝕊𝕥𝕒𝕥𝕚𝕠𝕟"
              collectionImageUrl="/img/drop-collection/col-5.jpeg"
              collectionUrl={{
                opensea:
                  "https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/1",
                looksrare:
                  "https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/1",
                rarible:
                  "https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:1",
              }}
            />
          </GridItem>

          <GridItem>
            <DeployCollectionCard
              artist="niroperrone"
              collectionName="Assets are Fried"
              collectionImageUrl="/img/drop-collection/col-2.jpeg"
              collectionUrl={{
                opensea:
                  "https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/2",
                looksrare:
                  "https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/2",
                rarible:
                  "https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:2",
              }}
            />
          </GridItem>

          <GridItem>
            <GridItem>
              <DeployCollectionCard
                artist="Orkhan Isayev"
                collectionName="VICTORY Aeromobile - Artemis Classic Y5"
                collectionImageUrl="/img/drop-collection/col-1.jpeg"
                collectionUrl={{
                  opensea:
                    "https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/3",
                  looksrare:
                    "https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/3",
                  rarible:
                    "https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:3",
                }}
              />
            </GridItem>
          </GridItem>

          <GridItem>
            <GridItem>
              <DeployCollectionCard
                artist="Laprisamata"
                collectionName="Saint in the Blue Desert"
                collectionImageUrl="/img/drop-collection/col-3.jpeg"
                collectionUrl={{
                  opensea:
                    "https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/4",
                  looksrare:
                    "https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/4",
                  rarible:
                    "https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:4",
                }}
              />
            </GridItem>
          </GridItem>

          <GridItem>
            <DeployCollectionCard
              artist="FourLeafClover"
              collectionName="A World of Hope"
              collectionImageUrl="/img/drop-collection/col-4.png"
              collectionUrl={{
                opensea:
                  "https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/5",
                looksrare:
                  "https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/5",
                rarible:
                  "https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:5",
              }}
            />
          </GridItem>

          <GridItem>
            <DeployCollectionCard
              video
              artist="FourLeafClover"
              collectionName="A World of Hope"
              collectionImageUrl="https://openseauserdata.com/files/ac43e6128c3ebbdf42ed46717f6ef94c.mp4#t=0.001"
              collectionUrl={{
                opensea:
                  "https://opensea.io/assets/ethereum/0xac9db340485aef69621510f0a3928dfd3b181799/6",
                looksrare:
                  "https://looksrare.org/collections/0xAc9DB340485aEf69621510F0a3928DFD3B181799/6",
                rarible:
                  "https://rarible.com/token/0xac9db340485aef69621510f0a3928dfd3b181799:6",
              }}
            />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default DeployCollection;
