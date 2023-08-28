import {
  Flex,
  Grid,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { Card } from "../Card";

const offer = [
  {
    img: "images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Dogoterapia",
    description:
      "Indywidualne zajęcia z psychologiem z udziałem psa terapeutycznego. Cel uzależniony jest od potrzeb uczestnika. Ustalamy go na pierwszym spotkaniu. Zajęcia mogą mieć formę psychoterapii, treningu umiejętności społecznych lub wspomagania rozwoju dziecka. Pies pełni rolę motywatora - jego obecność pomaga rozładować napięcie, poprawia samopoczucie, zachęca do interakcji z terapeutą i rozmowy, akceptuje i uczy empatii.",
  },
  {
    img: "images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Pies wspierający",
    description:
      "Indywidualne zajęcia z psychologiem z udziałem psa terapeutycznego. Cel uzależniony jest od potrzeb uczestnika. Ustalamy go na pierwszym spotkaniu. Zajęcia mogą mieć formę psychoterapii, treningu umiejętności społecznych lub wspomagania rozwoju dziecka. Pies pełni rolę motywatora - jego obecność pomaga rozładować napięcie, poprawia samopoczucie, zachęca do interakcji z terapeutą i rozmowy, akceptuje i uczy empatii.",
  },
  {
    img: "images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Trening umiejętności społecznych z udziałem zwierząt",
    description:
      "W otoczeniu przyrody i zwierząt uczestnicy wykonują ćwiczenia rozwijające umiejętności społeczne. Trening obejmuje 10 podstawowych umiejętności: zawieranie i podtrzymywanie znajomości, słuchanie, zadawanie pytań, odmawianie, inicjowanie rozmowy, dyskutowanie, reagowanie na krytykę, wyrażanie krytyki, radzenie sobie z uczuciami (rozróżnianie i wyrażanie uczuć), mówienie i przyjmowanie komplementów. Zwierzęta motywują do współpracy, są tematem do rozmów, pomagają wyrażać emocje. Trening prowadzony jest przez dwóch terapeutów (psychologa i przewodnika zwierząt).",
  },
  {
    img: "images/small-boy-feeding-horse-farm-zoo.jpg",
    name: "Warsztaty rozwjowe ze zwierzętami",
    description:
      "W obecności zwierząt i w otoczeniu przyrody pracujemy nad rozwojem osobistym. Zachęcamy do uważnej obecności, skupienia się na tym co tu i teraz, doświadczania otoczenia wszystkimi zmysłami, bez oceniania i wartościowania. Proponujemy aktywności z obszaru komunikacji, wyznaczania celów, budowania samooceny, radzenia sobie ze stresem, wyrażania emocji, zmiany blokujących schematów myślowych. Proces rozwojowy wspierany przez psychologa i przewodnika zwierząt.",
  },
];

export const OurOffer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="section"
      bg={`${colorMode}.bgSecondary`}
      justifyContent="center"
      padding={{ base: "50px 15px", lg: "90px 0px" }}
    >
      <Flex
      maxW="container.lg"
      direction="column"
      gap={{ base: 7, sm: 10, lg: 20 }}
      alignItems={{ base: "start", lg: "center" }}
      >
        <Heading as="h2">Nasza Oferta</Heading>
        <Text as="p" textAlign={{ base: "start", lg: "center" }}>
          Chcemy upowszechniać animaloterapię, jako metodę wspierającą
          rehabilitację, edukację, aktywizację, działania terapeutyczne i
          psychoterapeutyczne. Jest to do dziś główny cel naszych działań.
          Prowadzimy zajęcia z udziałem zwierząt (np. dogoterapię, alpakoterapię,
          hipoterapię) kierowane m.in. do osób z niepełnosprawnościami.
        </Text>
        <Grid
          gridTemplateColumns={{ base: "1fr" }}
          gap={{ base: 4, lg: 8 }}
        >
          {offer.map(({ img, name, description }, index) => (
            <Card key={index} img={img} name={name} description={description} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
