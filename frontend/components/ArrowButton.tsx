import { Box } from "@chakra-ui/react";

const ArrowButton = ({ rotate = false }) => (
  <Box transform={rotate ? "rotate(180deg)" : "none"} cursor="pointer">
    <svg
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.121923 25.7567C0.189201 11.9497 11.4365 0.811497 25.2434 0.878775C39.0504 0.946053 50.1886 12.1933 50.1213 26.0003C50.0541 39.8073 38.8068 50.9455 24.9998 50.8782C11.1929 50.8109 0.0546446 39.5636 0.121923 25.7567Z"
        fill="#E4FF00"
      />
      <path
        d="M30.8488 34.6615L29.1378 36.5361L19.67 25.958L29.2404 15.4726L30.9331 17.3638L23.0738 25.9745L30.8488 34.6615Z"
        fill="black"
      />
    </svg>
  </Box>
);

export default ArrowButton;
