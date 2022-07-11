import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 600,
    fontSize: theme.headings.sizes.h2.fontSize,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.headings.sizes.h3.fontSize,
    },
  },
}));
