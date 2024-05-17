import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to SonicPulse</Heading>
        <Text fontSize="lg">Experience the pulse of music like never before.</Text>
        <Button as={RouterLink} to="/about" colorScheme="blue" size="lg">Learn More About Us</Button>
      </VStack>
    </Container>
  );
};

export default Index;