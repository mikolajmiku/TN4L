import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export type OfferProps = {
  img: string;
  name: string;
  description: string;
};

export const CardHorizontal = ({ img, name, description }: OfferProps) => (
  <Flex
    flexDir="column"
    gap="4"
    justifyContent="center"
    alignItems="start"
    alignSelf="flex-start"
    textColor="white"
    color="white"
  >
    <Heading 
      size="md" 
      as="h3" 
      textColor="white">
      {name}
    </Heading>
    <Image objectFit="contain" src={img} alt={name} />
    <Text textColor="white">{description}</Text>
  </Flex>
);
