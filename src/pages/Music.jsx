import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Music = () => (
  <Box p={4}>
    <VStack spacing={8} align="center">
      <Heading as="h1" size="2xl">Our Music</Heading>
      <Text fontSize="lg" textAlign="center">
        Explore our discography and enjoy our latest music videos.
      </Text>
    </VStack>
  </Box>
);

export default Music;