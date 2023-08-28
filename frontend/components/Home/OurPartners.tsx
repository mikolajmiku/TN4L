import { Container, Flex, Grid, Heading, Image, Show } from "@chakra-ui/react";

const partnerLogos = [
  {
    img: "images/partner-logos/czarodziejska_gora_logo.png",
    title: "Fundacja Czarodziejska Góra",
  },
  {
    img: "images/partner-logos/miejsce_rozwoju_logo.jpg",
    title: "Miejsce Rozwoju Anna Łuszczak",
  },
  {
    img: "images/partner-logos/stajnia_logo.png",
    title: "Stajnia Zadora Zajączkowo",
  },
  {
    img: "images/partner-logos/amigos_logo.png",
    title: "Amigos",
  },
  {
    img: "images/partner-logos/pracownia_logo.png",
    title: "Pracownia Relacje",
  },
];

//TODO: Replace this with Richtext from Strapi CMS
const Richtext = () => (
  <>
    <p>Współpracujemy z organizacjami, firmami i osobami, którym bliska jest praca
    ze zwierzętami i w naturze.</p>
    <br />
    <p>„W pojedynkę możemy niewiele; razem możemy tak wiele.” (Helen Keller). Tak
    właśnie jest - dlatego współpracujemy z organizacjami, firmami i osobami,
    którym bliska jest praca ze zwierzętami i w naturze. Wśród naszych partnerów
    są:</p>
    <br />
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
    <Heading as="h1">Z kim współpracujemy</Heading>
    {/* Citation Card */}
    <Container maxW="container.sm">
      <Richtext />
    </Container>
    <Grid 
      gridTemplateColumns={{ base: "repeat(2, 110px)", lg: "repeat(4, 110px)" }}
      gap="45px"
      alignItems="center"
      justifyItems="center"
    >
      {partnerLogos.map(({ img, title }, index) => (
        <Show key={index}>
          <Image
            objectFit="cover"
            overflow="hidden"
            flex="1"
            src={img}
            alt={title}
            maxH={{ base: "640px" }}
          />
        </Show>
      ))}
    </Grid>
  </Flex>
);

export default OurPartners;
