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
      <DashBoard />
      <Footer />
    </>
  );
};

export default Admin;
