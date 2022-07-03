import { MantineThemeOverride } from "@mantine/core";

export const lightTheme: MantineThemeOverride = {
  fontFamily: "Raleway",
  primaryColor: "orange",
  colorScheme: "light",
  headings: {
    fontFamily: "Montserrat",
    sizes: {
      h1: { fontSize: 64 },
      h2: { fontSize: 42 },
      h3: { fontSize: 24 },
      h4: { fontSize: 21 },
      h5: { fontSize: 18 },
      h6: { fontSize: 16 },
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 21,
  },
};
