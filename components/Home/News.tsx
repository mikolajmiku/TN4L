import { Box, Button, Flex, Grid, Heading, useColorMode } from "@chakra-ui/react";

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

export const News = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="section"
      bg={`${colorMode}.bgFourth`}
      justifyContent="center"
      pt={{ base: 50, lg: 90 }}
      pb={{ base: 50, lg: 90 }}
    >
      <Flex
        as="section"
        direction="column"
        gap={{ base: 7, lg: 14 }}
        alignItems={{ base: "center" }}
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
        <Box>
          <Button size='lg'>Więcej aktualności</Button>
        </Box>
      </Flex>
    </Flex>
)};
