import React, { useState } from "react";
import {
  Typography,
  Box,
  Stack,
  Button,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import TopBar from "../component/TopBar";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MidBar from "../component/MidBar";
import LowerBar from "../component/LowerBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RoofingIcon from "@mui/icons-material/Roofing";
import PropertyCriteriaResult from "../component/PropertyCriteriaResult";
import PropertyForm from "../component/PropertyForm";
import AgentForm from "../component/AgentForm";
import AgentCriteriaResult from "../component/AgentCriteriaResult";
import { Book, Close } from "@mui/icons-material";
import BlogForm from "../component/BlogForm";
import BlogCriteriaResult from "../component/BlogCriteriaResult";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSmallItemClick = (section) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection("dashboard");
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
        sx={{ background: grey[300], mb: 1, padding: 1 }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            startIcon={<DashboardIcon />}
            onClick={() => handleSmallItemClick("dashboard")}
          >
            Dashboard
          </Button>
          <Stack direction={"row"} spacing={3} ml={4}>
            <Button
              variant="contained"
              startIcon={<RoofingIcon />}
              onClick={() => handleSmallItemClick("createProperty")}
            >
              Create Property
            </Button>
            <Button
              variant="contained"
              startIcon={<PersonAddAltIcon />}
              onClick={() => handleSmallItemClick("createAgent")}
            >
              Create Agent
            </Button>
            <Button
              variant="contained"
              startIcon={<Book />}
              onClick={() => handleSmallItemClick("createBlog")}
            >
              Create Blog
            </Button>
          </Stack>
        </Stack>
      </Typography>

      <TopBar onItemClick={handleSmallItemClick} />

      {activeSection === "buy" && (
        <PropertyCriteriaResult
          type="buy"
          title="Buyer Interested Properties | Approved"
          handleClose={handleClose}
        />
      )}
      {activeSection === "sell" && (
        <PropertyCriteriaResult
          type="sell"
          title="Properties Submitted by Sellers | Not Yet Approved"
          handleClose={handleClose}
        />
      )}
      {activeSection === "approved" && (
        <PropertyCriteriaResult
          type="approved"
          title="All Approved Properties"
          handleClose={handleClose}
        />
      )}
      {activeSection === "draft" && (
        <PropertyCriteriaResult
          type="draft"
          title="All Properties Waiting for Approval | Draft"
          handleClose={handleClose}
        />
      )}
      {activeSection === "all" && (
        <PropertyCriteriaResult
          type="all"
          title="All Properties | Draft + Approved"
          handleClose={handleClose}
        />
      )}
      {activeSection === "agent" && (
        <AgentCriteriaResult title="All Agents | Draft + Approved" editable  handleClose={handleClose}/>
      )}
      {activeSection === "blog" && (
        <BlogCriteriaResult title="All Blogs" editable  handleClose={handleClose}/>
      )}
      {activeSection === "dashboard" && (
        <>
          <MidBar />
          <LowerBar />
        </>
      )}
      {activeSection === "createProperty" && (
        <>
          <Paper elevation={24} sx={{ ml: "18%", mr: "18%", mb: 2 }}>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Typography
                  variant="button"
                  sx={{ fontWeight: "bold", padding: 1 }}
                >
                  Create Property
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={handleClose}>
                  <Close />
                </IconButton>
              </Grid>
              <Grid item>
                <PropertyForm direct handleClose={handleClose} />
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
      {activeSection === "createAgent" && (
        <>
          <Paper elevation={24} sx={{ ml: "18%", mr: "18%", mb: 2 }}>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Typography
                  variant="button"
                  sx={{ fontWeight: "bold", padding: 1 }}
                >
                  Create Agent
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={handleClose}>
                  <Close />
                </IconButton>
              </Grid>
              <Grid item>
                <AgentForm />
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
      {activeSection === "createBlog" && (
          <>
          <Paper elevation={24} sx={{ ml: "18%", mr: "18%", mb: 2 }}>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Typography
                  variant="button"
                  sx={{ fontWeight: "bold", padding: 1 }}
                >
                  Create Blog
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={handleClose}>
                  <Close />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <BlogForm/>
              </Grid>
            </Grid>
          </Paper>
        </>
        
      )}
    </Box>
  );
};

export default Dashboard;
