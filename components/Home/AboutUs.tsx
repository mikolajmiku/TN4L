import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const AboutUs = () => (
  <Flex
    as="section"
    pt="8"
    maxW="container.xl"
    alignSelf="center"
    direction={{ base: "column", md: "row" }}
    alignItems="center"
    gap={{ base: 4, lg: 8 }}
  >
    <Box flex="2" pl={{ base: "unset", lg: 0 }} alignItems="center">
      <Image
        objectFit="contain"
        src="images/small-boy-feeding-horse-farm-zoo.jpg"
        alt="Small bou feeding gorse on farm"
      />
    </Box>
    <Flex
      flex="1"
      direction="column"
      justifyContent="space-between"
      gap={{ base: 8, lg: "unset" }}
      alignSelf="stretch"
    >
      <Heading as="h1">O Fundacji</Heading>
      <Text as="p" textAlign="justify">
        Prowadzimy zajęcia z udziałem zwierząt dla osób z niepełnosprawnościami
        oraz dla dzieci i młodzieży w trudnej sytuacji życiowej lub mających
        problemy w relacjach społecznych. Specjalizujemy się w prowadzeniu
        dogoterapii. Współtworzymy programy terapeutyczne z przewodnikami innych
        zwierząt (np. koni, alpak).
      </Text>
      <Text as="p">
        Jako specjaliści (psychologowie) i właściciele zwierząt, zaczęliśmy
        zastanawiać się, jak do placówki wprowadzić psiego terapeutę. I wtedy
        zaczęła się nasza przygoda.
      </Text>
      <Box>
        <Button>Dowiedz się więcej</Button>
      </Box>
    </Flex>
  </Flex>
);
