import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CustomLink from "../component/CustomLink";
import { Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/loginAction';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const user = useSelector((state) => state.login);

  const handleLogout = () => {
    console.log("Logging out");
    dispatch(logout(user));
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="flex-end">
            <Typography variant="h1" component={"h1"}>
              <CustomLink to={`/`}>Tomorrow</CustomLink>
            </Typography>
            <Typography variant="p" component="p" sx={{ textAlign: "end" }}>
            <CustomLink to={`/`}>.luxuryproperty</CustomLink>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
             component="a"
             href="/buy"
              variant="contained"
              startIcon={<StoreIcon />}
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.contrastText,
                fontWeight: "bold",
              }}
            >
              Buy
            </Button>
            <Button
              component="a"
              href="/sell"
              variant="contained"
              startIcon={<StorefrontIcon />}
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.contrastText,
                fontWeight: "bold",
              }}
            >
              Sell
            </Button>
            <Button
              component="a"
              onClick={handleLogout}
              variant="contained"
              startIcon={<Logout />}
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.contrastText,
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
