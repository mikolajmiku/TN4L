import { Flex, Image, Text } from "@chakra-ui/react";

export type PartnerLogoProps = {
  img: string;
  title: string;
};

export const PartnerLogo = ({ img, title }: PartnerLogoProps) => (
  <Flex direction="column" align="center" width={44} gap={4}>
    <Image src={img} alt={title} height={24} />
    <Text align="center"> {title}</Text>
  </Flex>
);
