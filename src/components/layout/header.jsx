import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

import { theme } from "@/themes";
import { Logo } from "../logo";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  IconButton,
  TextField,
  styled,
} from "@mui/material";

const BadgeSC = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    fontSize: "10px",
    fontWeight: 700,
    lineHeight: "16px",
    top: 6,
    right: 2,
    width: 16,
    height: 16,
    minWidth: "unset",
  },
}));

function Header({ isAuth }) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        background: theme.palette.background.white,
        color: "unset",
        borderBottom: "1px solid #DBDBDB",
        height: 72,
        boxShadow: "unset",
      }}
    >
      <Container maxWidth="unset">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: 72 }}
        >
          <Box display="flex" flex={1} alignItems="center">
            <Logo />
            {isAuth && (
              <>
                <Box ml={6}>
                  <Grid container columnSpacing={4}>
                    <Grid item>
                      <Typography>Domains</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Loans & Reservations</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>External Providers</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box ml={7} flex={1}>
                  <TextField
                    InputProps={{
                      startAdornment: <SearchIcon />,
                    }}
                    fullWidth
                    variant="filled"
                  />
                </Box>
              </>
            )}
          </Box>
          {isAuth && (
            <Box display="flex" flex alignItems="center" gap={2}>
              <Box 
                onClick={() =>{
                 return navigate("/qr-code")
                } } 
              >
              <IconButton size="large" color="inherit">
                <BadgeSC >
                  <QrCodeScannerIcon />
                </BadgeSC>
              </IconButton>
              </Box>             
              <IconButton size="large" color="inherit">
                <BadgeSC badgeContent={4} color="error">
                  <NotificationsNoneIcon />
                </BadgeSC>
              </IconButton>
              <Box display="flex" gap={1} alignItems="center">
                <Avatar sx={{ width: 28, height: 28 }} />
                <Box>
                  <Typography fontSize="12px" fontWeight="700">
                    Sara Ang
                  </Typography>
                  <Typography fontSize="12px" color="text.secondary">
                    Learner
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
