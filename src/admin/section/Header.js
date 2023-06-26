import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppLogo from "./AppLogo";
import RoofingIcon from "@mui/icons-material/Roofing";
import StoreIcon from "@mui/icons-material/Store";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";
import CustomLink from "../component/CustomLink";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="flex-end">
            <Typography variant="h1" component={"h1"}>
              <CustomLink to={`/`}>Tomorrow</CustomLink>
            </Typography>
            <Typography variant="p" component="p" sx={{ textAlign: "end" }}>
              .luxuryproperty
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
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
