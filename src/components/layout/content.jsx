import { theme } from "@/themes";
import { Box } from "@mui/material";

export const Content = ({ children, Breadcrumb = null, ...props }) => {
  return (
    <Box
      paddingTop={9}
      paddingBottom={12}
      sx={{ height: "100vh", overflow: "auto" }}
      {...props}
    >
      {Breadcrumb}
      <Box
        sx={{
          background: theme.palette.background.white,
          margin: { xs: 2, md: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
