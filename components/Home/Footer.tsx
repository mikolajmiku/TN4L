import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  Text
} from "@chakra-ui/react";
import NextLink from "next/link";

import Copyright from "./Copyright";

//TODO: Replace this with Richtext from Strapi CMS
const Richtext1 = () => (
  <>
    ul. Legnicka 65 <br /> 
    54-206 Wrocław<br />
    tel: 
    <Link type="tel" href="tel:790715876">790 715 876</Link>
    <br />
    e-mail:
    <Link type="email" href="mailto:terapeutana4lapach@gmail.com">terapeutana4lapach@gmail.com</Link>
    <br />
    <br />
    NIP: 8943133983<br />
    REGON: 381598083<br />
  </>
);

const Richtext2 = () => (
  <>
    <b>Numer konta:</b><br /> 
    Wsparcie prosimy kierować na konto fundacji: SANTANDER BANK POLSKA S.A.<br />
    <b>79 1090 2516 0000 0001 4217 7033</b>
    <br/><br/>
    Wesprzyj nasze działania.<br/>
    Pomagajmy razem!<br/>
    Zostań wolontariuszem!
  </>
);

const SocialLinks = [
  {
    src: "socialIcons/facebook.svg",
    alt: "facebook icon",
    href: "https://www.facebook.com/Terapeutana4lapach/",
  }
];

const routes: { link: string; text: string }[] = [
  { link: "/o-nas", text: "O fundacji" },
  { link: "/oferta", text: "Oferta" },
  { link: "/aktualności", text: "Aktualności" },
  { link: "/kontakt", text: "Kontakt" },
];

const Footer = () => (
  <Box>
    <Box
      as="section"
      backgroundColor="bgTertiary"
      py={{ base: 10, lg: 20}}
    >
      <Container maxWidth="container.xl">
        <Grid
          gap={6}
          textColor="textPrimary"
          gridTemplateColumns={{ base: "repeat(3, auto)" }}
        >
          <Flex flexDir="column" gap={6}>
            <Image
              width="full"
              maxWidth="215px"
              src="logos/4_lapy_logo.svg"
              alt="Logo Fundacji na 4 Łapach"
            />
            <p>
              <Richtext1 />
            </p>
            {SocialLinks.map(({ src, alt, href }, index) => (
              <Link as={NextLink} href={href} key={index} isExternal>
                <Image alt={alt} src={src} />
              </Link>
            ))}
          </Flex>
          <Flex flexDir="column" gap={6} alignItems="flex-start">
            <Text fontSize="lg" textColor="white">Wesprzyj nas</Text>
            <p>
              <Richtext2 />
            </p>
            <Button size="lg">Wesprzyj</Button>
          </Flex>
          <Flex flexDir="column" gap={6}>
            <Text fontSize="lg" textColor="white">Strona główna</Text>
            {routes.map(({ link, text }) => (
              <Link
                as={NextLink}
                href={link}
                key={link}
              >
               {text}
              </Link>
            ))}
          </Flex>
        </Grid>
      </Container>
    </Box>
    <Copyright />
  </Box>
);

export default Footer;
