import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export type OfferProps = {
  img: string;
  name: string;
  description: string;
};

export const CardHorizontal = ({ img, name, description }: OfferProps) => (
  <Flex
    flexDir="column"
    justifyContent="center"
    gap="4"
    alignItems="start"
    alignSelf="flex-start"
    textColor="white"
    color="white"
  >
    <Flex 
      gap="4"
      flexDir={{ base: "row-reverse", lg: "column" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      justifyContent={{ base: "start", lg: "start" }}
    >
      <Heading 
        size="md" 
        as="h3" 
        textColor="white"
        marginLeft={{ base: "15px", lg: "0px" }}>
        {name}
      </Heading>
      <Image 
        objectFit="contain" 
        src={img} 
        alt={name}
        width={{ base: "50%",  lg: "100%"}} />
    </Flex>
    <Text textColor="white">{description}</Text>
  </Flex>
);
