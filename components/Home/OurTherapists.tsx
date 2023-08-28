import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";

import { CardHorizontal } from "../CardHorizontal";

const offer = [
  {
    img: "images/dog_1.jpg",
    name: "Luna",
    description:
      "Czarna labradorka, pies terapeutyczny. Najbardziej lubi pracę z dziećmi i młodzieżą. Kocha pływać, aportować, szukać schowanych zabawek. Chętnie wykonuje sztuczki, szybko się uczy, ma dużą motywację do współpracy. Lubi znajdować się w centrum uwagi i być głaskana.",
  },
  {
    img: "images/dog_2.jpg",
    name: "Forest",
    description:
      "Biszkoptowy kundelek, pies terapeutyczny. Chętnie bierze udział w zajęciach z młodzieżą lub z osobami dorosłymi. Lubi biegać, trenować rally-o, bawić się z innymi psami. Uczestnik dogtrekkingów i psich obozów. Jest spokojny i cierpliwy.",
  },
];

export const OurTherapists = () => (
    <Flex
      as="section"
      direction="column"
      padding={{ base: "50px 15px", lg: "90px 0px" }}
      bg="bgTertiary"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <Flex 
        direction="column"
        maxW="container.md"
        gap={{ base: 7, sm: 10, lg: 20 }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <Heading 
          as="h2" 
          textColor="white"
        >Nasi psi terapeuci</Heading>
        <Text 
          as="p" 
          paddingLeft={{ base: 0, lg: 20 }}
          paddingRight={{ base: 0, lg: 20 }}
          textAlign={{ base: "center", lg: "start" }}
          textColor="white"
        >
        Psy terapeutyczne są niezwykle wartościowymi towarzyszami dla osób z różnymi potrzebami emocjonalnymi i fizycznymi. Poznaj naszych psich terapeutów. 
        </Text>
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, lg: 4 }}
        >
          {offer.map(({ img, name, description }, index) => (
            <CardHorizontal key={index} img={img} name={name} description={description} />
          ))}
        </Grid>
        <Box>
          <Button size="lg">Poznaj nasz zespól</Button>
        </Box>
      </Flex>
    </Flex>
  );
