import LogoSvg from "@/assets/logo.svg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <img src={LogoSvg} alt="logo" />
      </Link>
    </Box>
  );
};
