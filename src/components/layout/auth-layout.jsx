import { Container, Grid, styled } from "@mui/material";
import Header from "./header";

const WrapperAuthSC = styled(Container)(() => ({
  padding: "0px",
  margin: "0px",
  maxWidth: "520px !important",
}));

export const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapperAuthSC sx={{ mx: "auto" }}>
        <Grid width="100%" item xs={12} sm={6}>
          {children}
        </Grid>
      </WrapperAuthSC>
    </>
  );
};
