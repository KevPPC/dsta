import { Content } from "@/components/layout/content";
 import { ResetPassword } from "@/features/reset-password";
import { Box } from "@mui/material";

export const ResetPasswordContainer = () => {
  return (
    <Content>
      <Box sx={{ marginTop: { xs: "10%", sm: "40%" } }}>
        <ResetPassword />
      </Box>
    </Content>
  );
};
