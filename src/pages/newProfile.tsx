import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Container, LoadingIndicator } from "components";

import { useRouter } from "next/router";

const Profile = () => {
  const { replace } = useRouter();

  if (typeof window !== "undefined") {
    replace("/404");
  }

  return <LoadingIndicator />;

  return (
    <Box bg="brand.background">
      <Container>
        <Flex
          h={{ sm: "100vh", lg: "100vh" }}
          pt="10vh"
          justifyContent="center"
          alignItems="center"
        >
          <Flex w="100%" h="80%" border="0.1px solid">
            <Box
              w="40%"
              borderRight="0.1px solid"
              borderColor="brand.white"
              fontWeight="semibold"
            >
              <Heading m={12}>PROFILE</Heading>

              <Box>
                <Button
                  borderRadius={0}
                  w="100%"
                  minH="80px"
                  px={12}
                  bg="brand.text"
                  color="brand.background"
                  variant="unstyled"
                >
                  <Text fontSize="2xl">User Profile</Text>
                </Button>

                <Button
                  borderRadius={0}
                  w="100%"
                  h="80px"
                  px={12}
                  alignItems="center"
                  bg="transparent"
                  isActive={false}
                >
                  <Text fontSize="2xl">Burn</Text>
                </Button>

                <Button
                  borderRadius={0}
                  w="100%"
                  h="80px"
                  px={12}
                  alignItems="center"
                  bg="transparent"
                >
                  <Text fontSize="2xl">Transfer</Text>
                </Button>
              </Box>
            </Box>

            <Box w="100%" pl={12}></Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Profile;
