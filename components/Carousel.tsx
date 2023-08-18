// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

import { Box } from "@chakra-ui/react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PartnerLogo } from "./PartnerLogo";

export const partnerLogos = [
  {
    img: "images/partner-logos/miejsce_rozwoju_logo.jpg",
    title: "Miejsce Rozwoju Anna Łuszczak",
  },
  {
    img: "images/partner-logos/czarodziejska_gora_logo.png",
    title: "Fundacja Czarodziejska Góra",
  },
  {
    img: "images/partner-logos/stajnia_logo.png",
    title: "Stajnia Zadora Zajączkowo",
  },
  {
    img: "images/partner-logos/amigos_logo.png",
    title: "Amigos",
  },
];

const Carousel = () => (
  <Box width="100%">
    <Swiper
      modules={[Virtual]}
      spaceBetween={176}
      slidesPerView={3}
      centeredSlides={true}
      virtual
    >
      {partnerLogos.map((partnerLogo, index) => (
        <SwiperSlide key={index}>
          <PartnerLogo img={partnerLogo.img} title={partnerLogo.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default Carousel;
