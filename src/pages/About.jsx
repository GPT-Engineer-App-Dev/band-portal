import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={8} align="center">
      <Heading as="h1" size="2xl">About SonicPulse</Heading>
      <Text fontSize="lg" textAlign="center">
        SonicPulse is a dynamic music band known for their electrifying performances and soulful music. 
        Formed in 2010, the band has been captivating audiences worldwide with their unique sound and powerful lyrics.
      </Text>
      <Image src="/images/band.jpg" alt="SonicPulse Band" borderRadius="md" />
      <Heading as="h2" size="xl">Band Members</Heading>
      <Text fontSize="md" textAlign="center">
        Our band consists of talented musicians who bring their own flair and expertise to create the magic that is SonicPulse.
      </Text>
    </VStack>
  </Box>
);

export default About;