import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Events = () => (
  <Box p={4}>
    <VStack spacing={8} align="center">
      <Heading as="h1" size="2xl">Upcoming Events</Heading>
      <Text fontSize="lg" textAlign="center">
        Stay tuned for our upcoming events and shows. We can't wait to see you there!
      </Text>
    </VStack>
  </Box>
);

export default Events;