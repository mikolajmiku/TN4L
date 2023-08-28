import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export type OfferProps = {
  img: string;
  name: string;
  description: string;
};

export const Card = ({ img, name, description }: OfferProps) => (
  <Grid
    templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
    width="auto"
    justifyContent="center"
    alignItems="center"
  >
    <Flex 
      direction="column" 
      gap="2"
      bgColor={{ base: "bgSecondary", lg: "white"}}
      padding={{ base: "30px 0px", lg: "30px 70px" }}
      order={{ base: 1, lg: 0 }}
    >
      <Heading size="md" as="h3">
        {name}
      </Heading>
      <Text textColor="textSecondary">{description}</Text>
      <Box pt={{ base: 15, lg: 25}}>
        <Button size="lg">Więcej</Button>
      </Box>
    </Flex>
    <Box 
      height="100%" 
      width="100%"
      order={{ base: 0, lg: 1 }}
    >
      <Image objectFit="cover" src={img} alt={name} height="100%" />
    </Box>
  </Grid>
);
