import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const SupportUs = () => (
  <Flex
    as="section"
    direction="column"
    padding={{ base: "50px 15px", lg: "90px 0px" }}
    bg="bgTertiary"
    alignItems={{ base: "center" }}
    gap={{ base: 10 }}
  >
    <Heading 
      as="h2" 
      textColor="white"
    >Wesprzyj nas</Heading>
    <Flex
      as="section"
      pt="8"
      maxW="container.lg"
      alignSelf="center"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      gap={{ base: 4, lg: 8 }}
    >
      <Flex pl={{ base: "unset", lg: 0 }} alignItems="end" justifyContent="flex-end">
        <Image
          objectFit="contain"
          src="images/support.jpg"
          alt="Wesprzyj nasze działania"
        />
      </Flex>
      <Flex
        flex="1"
        direction="column"       
        justifyContent="space-around"                                                                                                
        gap={{ base: 8, lg: "unset" }}
        alignSelf="stretch"
      >
        <Box>
          <Text as="p" textColor="white">Nasi terapeuci i nasze zwierzeta pomagaja dzieciom w drodze do samodzielnosci!</Text>
          <Heading size="md" as="h3" textColor="white">Wesprzyj nasze działania.</Heading>
        </Box>
        <Box>
          <Text as="p" textColor="white">Pracujesz w obszarze terapii z udziałem zwierząt?</Text>
          <Heading size="md" as="h3" textColor="white">Pomagajmy razem!</Heading>
        </Box>
        <Box>
          <Text as="p" textColor="white">Podziel się energią i...</Text>
          <Heading size="md" as="h3" textColor="white">Zostań wolontariuszem!</Heading>
        </Box>
        <Box>
          <Button size="lg">Więcej</Button>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);
