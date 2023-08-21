import { Flex, Grid, Heading } from "@chakra-ui/react";

import { CardShort } from "../CardShort";

interface Action {
  name: string;
  image: string;
}
const actions: Action[] = [
  {
    name: "Kolejna edycja zajęć dla naszych podopiecznych w tym roku!",
    image: "images/alpacas-farm.png",
  },
  {
    name: "Kolejna edycja zajęć dla naszych podopiecznych w tym roku!",
    image: "images/alpacas-farm.png",
  },
  {
    name: "Kolejna edycja zajęć dla naszych podopiecznych w tym roku!",
    image: "images/alpacas-farm.png",
  },
];

export const News = () => (
  <Flex
    as="section"
    direction="column"
    gap={{ base: 4, lg: 8 }}
    alignItems={{ base: "start", lg: "center" }}
    alignSelf="center"
    maxW="container.lg"
  >
    <Heading as="h2">Aktualności</Heading>
    <Grid
      gap="4"
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      alignSelf="center"
    >
      {actions.map(({ name, image }, index) => (
        <CardShort key={index} title={name} img={image} />
      ))}
    </Grid>
  </Flex>
);
