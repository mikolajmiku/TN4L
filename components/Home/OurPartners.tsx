import { Container, Flex, Heading } from "@chakra-ui/react";

import Carousel from "../Carousel";

//TODO: Replace this with Richtext from Strapi CMS
const Richtext = () => (
  <>
    Współpracujemy z organizacjami, firmami i osobami, którym bliska jest praca
    ze zwierzętami i w naturze.
    <br />
    „W pojedynkę możemy niewiele; razem możemy tak wiele.” (Helen Keller). Tak
    właśnie jest - dlatego współpracujemy z organizacjami, firmami i osobami,
    którym bliska jest praca ze zwierzętami i w naturze. Wśród naszych partnerów
    są:
    <br /> <br />
    <ul>
      <li>Fundacja Czarodziejska Góra</li>
      <li>Mar-Tusia - hipoterapia i rehabilitacja dla dzieci</li>
      <li>BejRoots - hipo&fizjoterapia</li>
      <li>Amigos - zagroda Alpak</li>
      <li>Stajnia Zadora</li>
      <li>Miejsce Rozwoju Anna Łaszcz</li>
      <li>Pracownia Relacje</li>
      <li>Katarzyna Kabza i pies terapeutyczny Miko</li>
    </ul>
  </>
);

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
      <Richtext />
    </Container>
    <Carousel />
  </Flex>
);

export default OurPartners;
