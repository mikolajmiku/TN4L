import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

type CardTallProps = {
  img: string;
  title: string;
};

export const CardShort = ({ img, title }: CardTallProps) => (
  <Flex
    textAlign="center"
    direction="column"
    bg="bgPrimary"
    w={{ base: "full", lg: "unset" }}
    boxShadow='6px 6px 8px 0px rgba(211, 211, 211, 0.6)'
  >
    <Image src={img} alt="TODO" />
    <Flex 
      textAlign="center"
      direction="column"
      gap={{ base: 5, lg: 4 }}
      p={{ base: 4 }}
      justifyContent="space-between"
    >
      <Heading
        as="h3"
        size="md"
        textAlign="left"
        color="textSecondary"
      >
        {title}
      </Heading>
      <Flex 
        justifyContent={{ base: "space-between" }}
        alignItems="end"
      >
        <Text>12.04.2023</Text>
        <Button width="fit-content">Więcej</Button>
      </Flex>
    </Flex>
  </Flex>
);
