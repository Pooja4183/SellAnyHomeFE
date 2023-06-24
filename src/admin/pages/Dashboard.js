import React, { useState } from "react";
import {
  Typography,
  Box,
  InputLabel,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import TopBar from "../component/TopBar";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MidBar from "../component/MidBar";
import LowerBar from "../component/LowerBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RoofingIcon from "@mui/icons-material/Roofing";
import PropertyCriteriaResult from "../component/PropertyCriteriaResult";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSmallItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Box
      sx={{
        mt: 9,
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
        <Stack direction={"row"}>
          <Button
            startIcon={<DashboardIcon />}
            onClick={() => handleSmallItemClick("dashboard")}
          >
            Dashboard
          </Button>
          <Stack direction={"row"} spacing={3} ml={4}>
            <Button variant="contained" startIcon={<RoofingIcon />}>
              Create Property
            </Button>
            <Button variant="contained" startIcon={<PersonAddAltIcon />}>
              Create Agent
            </Button>
          </Stack>
        </Stack>
      </Typography>

      <TopBar onItemClick={handleSmallItemClick} />

      {activeSection === "buy" && (
        <PropertyCriteriaResult
          type="buy"
          title="Buyer Interested Properties | Approved"
        />
      )}
      {activeSection === "sell" && (
        <PropertyCriteriaResult
          type="sell"
          title="Properties Submitted by Sellers | Not Yet Approved"
        />
      )}
      {activeSection === "approved" && (
        <PropertyCriteriaResult
          type="approved"
          title="All Approved Properties"
        />
      )}
      {activeSection === "draft" && (
        <PropertyCriteriaResult
          type="draft"
          title="All Properties Waiting for Approval | Draft"
        />
      )}
      {activeSection === "all" && (
        <PropertyCriteriaResult
          type="all"
          title="All Properties | Draft + Approval"
        />
      )}
      {activeSection === "dashboard" && (
        <>
          <MidBar />
          <LowerBar />
        </>
      )}
    </Box>
  );
};

export default Dashboard;
