import { Container, Stack } from "@mui/material";
import { theme } from "@/themes";
import { useState } from "react";
import BoxType from "@/components/box-type";
export const HomeContainer = () => {

  const [tabCategory, setTabCategory] = useState("All");

  const handleTabCategory = (value) => {
    setTabCategory(value)
  }
  return (
    <Stack direction="row" sx={{flexGrow: "1"}}>
      <Container sx={{
        background: theme.palette.background.white,
        color: theme.palette.text.primary,
        marginTop: "32px",
        padding: "24px"
      }}>
        <BoxType 
          tabCategory={tabCategory}
          handleTabCategory={handleTabCategory}
        />
      </Container>
    </Stack>
  );
};
