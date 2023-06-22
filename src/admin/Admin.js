import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import DashBoard from "./pages/Dashboard";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import LowerBar from "./component/LowerBar";
import MidBar from "./component/MidBar";
import TopBar from "./component/TopBar";
import { Route, Switch } from "react-router-dom";
import BookingSale from "./pages/BookingSale";

const Admin = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          mt: 10,
          ml: 1,
          mr: 1,
          backgroundColor: grey[50],
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ background: grey[300], mb: 1, padding: 1 }}
        >
          Dashboard
        </Typography>

        <TopBar />
        <Switch>
        <Route path="/admin/sell" exact>
            <BookingSale />
            <LowerBar />
          </Route>
          <Route path="/admin" exact>
            <MidBar />
            <LowerBar />
          </Route>
          
        </Switch>
      </Box>

      <Footer />
    </>
  );
};

export default Admin;
