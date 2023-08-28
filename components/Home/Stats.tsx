import { Flex, Heading, Text } from "@chakra-ui/react";

import { Counter } from "../Counter";

const statistics = [
  {
    text: "przeprowadzonych warsztatów od początku naszej działalności",
    amount: "25",
    more: true
  },
  { text: "uczestników zajęć rozwojowych do tej pory", 
    amount: "40",
    more: true 
  },
  {
    text: "zwierząt otwartych na kontakt z człowiekiem w celach terapeutycznych",
    amount: "12",
    more: false
  },
  {
    text: "organizacji oraz firm wspólpracujących z nami na stałe",
    amount: "8",
    more: false
  },
  { text: "lat działalności", 
    amount: "2022", 
    more: false
  },
];

export const Stats = () => (
  <Flex
    justifyContent="center"
    maxW="container.xl"
    alignSelf="center"
    alignItems={{ base: "center" }}
    direction="column"
    gap={{ base: 7, sm: 10, lg: 20 }}
  >
    <Heading as="h2">Liczby i osiągnięcia naszej Fundacji</Heading>
    <Flex justifyContent="center" flexWrap="wrap" gap="5">
      {statistics.map(({ text, amount, more }, index) => (
        <Flex
          direction="column"
          justifyContent="space-evenly"
          px="5"
          py="8"
          alignItems="center"
          textAlign="center"
          key={index}
          height={{ base: "240px", lg: "280px" }}
          maxW={{ base: "320px", lg: "360px" }}
          w="full"
          h="full"
          bg="white"
          boxShadow="0px 0px 20px 0 #D5E4CD"
        >
          <Text
            fontSize="7xl"
            sx={{ fontStretch: "condensed" }}
            fontWeight="bold"
            color="textSecondary"
          >
            <Counter from={0} to={amount} />
            {more && <>+</>}
          </Text>
          <Text color="textSecondary">{text}</Text>
        </Flex>
      ))}
    </Flex>
  </Flex>
);
