import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Container } from "components";

const Profile = () => {
  return (
    <Box bg="brand.bg">
      <Container maxW="container.xl">
        <Flex
          h={{ sm: "100vh", lg: "100vh" }}
          pt="10vh"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            bg="brand.blue"
            borderRadius="2xl"
            w="100%"
            h="80%"
            border="3px solid"
            borderColor="brand.white"
          >
            <Box w="40%" borderRight="1px solid" pr={12}>
              <Heading m={12}>PROFILE</Heading>

              <Box>
                <Flex
                  bg="white"
                  w="100%"
                  h="80px"
                  borderEndRadius="full"
                  px={12}
                  color="pink"
                  alignItems="center"
                >
                  <Text fontSize="3xl">User Profile</Text>
                </Flex>

                <Flex w="100%" h="80px" px={12} alignItems="center">
                  Burn
                </Flex>
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
