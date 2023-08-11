import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const OurPartners = () => (
  <Flex
    as="section"
    direction="column"
    alignItems="center"
    gap={{ base: 4, lg: 8 }}
  >
    <Heading as="h1">Nasi Partnerzy</Heading>
    {/* Citation Card */}
    <Container maxW="3xl">
      <Text>
        W zgodzie z tą myślą tworzymy programy zajęć przy współpracy z
        organizacjami, firmami i osobami, którym bliska jest praca ze
        zwierzętami i w naturze.
      </Text>
    </Container>
    {/* Partnerzy slider */}
  </Flex>
);

export default OurPartners;
