import Header from "./header";
import { Footer } from "./footer";
import { useProfileStore } from "@/stores";
import { Stack } from "@mui/material";

export const MainLayout = ({ children }) => {
  const { profile } = useProfileStore();
  return (
    <Stack direction="column" sx={{minHeight: "100vh", }}>
      <Header isAuth={!!profile} />
      {children}
      <Footer />
    </Stack>
  );
};
