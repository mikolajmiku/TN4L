import { Flex } from "@chakra-ui/react";

import { AboutUs } from "../components/Home/AboutUs";
import Footer from "../components/Home/Footer";
import { ImageDivider } from "../components/Home/ImageDivider";
import { News } from "../components/Home/News";
import { OurActions } from "../components/Home/OurActions";
import { OurOffer } from "../components/Home/OurOffer";
import OurPartners from "../components/Home/OurPartners";
import { OurTherapists } from "../components/Home/OurTherapists";
import { Stats } from "../components/Home/Stats";
import { SupportUs } from "../components/Home/SupportUs";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <Flex direction="column" gap={{ base: 16, lg: 32 }}>
      <AboutUs />
      <OurOffer />
      <OurActions />
      <ImageDivider />
      <Stats />
      <OurTherapists />
      <News />
      <SupportUs />
      <OurPartners />
      <Footer />
    </Flex>
  </Layout>
);

export default IndexPage;
