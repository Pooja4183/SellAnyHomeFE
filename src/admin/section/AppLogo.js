import React from "react";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Logo } from"../../images/SAH_Images/tomor_adobe_express.svg"; // Import your SVG logo file

const AppLogo = () => {
    return (
      <IconButton aria-label="logo">
        <Logo />
      </IconButton>
    );
  };

  export default AppLogo;