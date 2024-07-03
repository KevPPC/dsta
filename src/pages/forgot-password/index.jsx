import { Content } from "@/components/layout/content";
import { ForgotPassword } from "@/features/forgot-password";
import { Box } from "@mui/material";

export const ForgotPasswordContainer = () => {
  return (
    <Content>
      <Box sx={{ marginTop: { xs: "10%", sm: "40%" } }}>
        <ForgotPassword />
      </Box>
    </Content>
  );
};
