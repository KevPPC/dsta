import { Content } from "@/components/layout/content";
import { LoginForm } from "@/features";
import { Box } from "@mui/material";

export const LoginFormContainer = () => {
  return (
    <Content>
      <Box sx={{ marginTop: { xs: "10%", sm: "40%" } }}>
        <LoginForm />
      </Box>
    </Content>
  );
};
