import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#E2452E",
      200: "#ec8451",
      300: "#e8b070",
    },
  },
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Poppins, sans-serif",
  },
});

export default theme;
