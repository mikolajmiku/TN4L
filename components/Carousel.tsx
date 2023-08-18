import { Box } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import ArrowButton from "./ArrowButton";
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
  {
    img: "images/partner-logos/pracownia_logo.png",
    title: "Pracownia Relacje",
  },
];

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Box width="100%">
      <ReactSimplyCarousel
        centerMode={true}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        autoplay={true}
        autoplayDelay={5000}
        speed={300}
        easing="cubic-bezier(0.3,0.2,0.2,1.4)"
        containerProps={{
          style: {
            flexWrap: "nowrap",
            justifyItems: "stretch",
            gap: chakraTheme.sizes[6],
          },
        }}
        backwardBtnProps={{
          children: <ArrowButton />,
        }}
        forwardBtnProps={{
          children: <ArrowButton rotate={true} />,
        }}
        innerProps={{
          style: {
            maxWidth: chakraTheme.sizes.container.xl,
          },
        }}
      >
        {partnerLogos.map((partnerLogo, index) => (
          <PartnerLogo
            key={index}
            img={partnerLogo.img}
            title={partnerLogo.title}
          />
        ))}
      </ReactSimplyCarousel>
    </Box>
  );
};

export default Carousel;
