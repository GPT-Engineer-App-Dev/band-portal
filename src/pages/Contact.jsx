import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={8} align="center">
      <Heading as="h1" size="2xl">Contact Us</Heading>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Your Email" />
      </FormControl>
      <FormControl id="message" isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Your Message" />
      </FormControl>
      <Button colorScheme="blue" size="lg">Send Message</Button>
    </VStack>
  </Box>
);

export default Contact;