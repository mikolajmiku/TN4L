import { Flex, Image, Show } from "@chakra-ui/react";

const images = [
  { image: "images/walk_big_2.jpg", desc: "Dogs by the river", show: "lg" },
  { image: "images/walk_big.jpg", desc: "Dogs by the river", show: "lg" },
];

export const ImageDivider = () => (
  <Flex justifyContent="start" gap="8" overflow="hidden">
    {images.map(({ image, desc, show }, index) => (
      <Show key={index} above={show}>
        <Image
          objectFit="cover"
          overflow="hidden"
          flex="1"
          src={image}
          alt={desc}
          maxH={{ base: "640px" }}
        />
      </Show>
    ))}
  </Flex>
);
