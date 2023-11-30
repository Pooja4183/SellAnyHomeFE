import { FormControl, Grid, List, ListItem, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from "@mui/material";
import StyledButton from "../custom/StyledButton";
import StyledTextField from "../custom/StyledTextField";
import StyledSelect from "../custom/StyledSelect";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import PropertyDetail from "../../master.json";
import { useDispatch } from "react-redux";
import { createAgent } from "../../store/adminAction";
import { useTheme } from "@emotion/react";
import {useMediaQuery } from "@mui/material";


const AgentForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salesVolume: "",
    status: "DRAFT",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(createAgent(formData, "DRAFT"));
      setSuccess(true);
      setError(null);
    } catch (error) {
      setSuccess(false);
      setError(error.message);
    }
  };

  return (
    <>
      <Paper  
        variant="none"
        component={"form"}
        sx={{ padding: isMobile ? 0:2 }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <StyledTextField
              label="Full Name"
              name="name"
              fullWidth
              value={formData.name}
              required
              onChange={handleChange}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <StyledTextField
              label="Personal Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <StyledTextField
              label="Preferred Phone"
              name="phone"
              fullWidth
              value={formData.phone}
              required
              onChange={handleChange}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="p">
              What is your individual yearly commission volume!
            </Typography>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
              <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.salesVolume}
                label=""
                onChange={handleChange}
                name="salesVolume"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {PropertyDetail.agentSalesVolume.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
            By submitting this form I accept the Privacy Policy and Terms of
            Service.
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            {isSuccess && (
              <Typography
                variant="success"
                sx={{ marginTop: 2, marginLeft: 1, color: "green" }}
              >
                Your details has been sent successfully! We will connect with
                you shortly.
              </Typography>
            )}
            {error && (
              <Typography variant="error" sx={{ marginTop: 2, marginLeft: 1 }}>
                An error occurred: {error}
              </Typography>
            )}
            <StyledButton type="submit">Submit</StyledButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
const AgentConnect = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container spacing={5} sx={{padding: isMobile ?"10% 5%" : "5% 10%" }}>
      <Grid item xs={12} sm={12} lg={6}>
     
          <Grid item xs={12} sm={12} lg={12}>
          {/* <Grid item xs={12} sm={12} lg={6}  */}
        <Typography variant="h1" sx={{marginBottom:4 , fontSize: isMobile ? "24px": "30px" }}>Let's Chat</Typography>
        {/* </Grid> */}
              <List>

                <ListItem disablePadding sx={{marginBottom: isMobile ? 2:4}}><ListItemIcon><CheckIcon/> </ListItemIcon> <ListItemText > Start Selling Dubai Real Estate in 30 Min</ListItemText> </ListItem>
                <ListItem disablePadding sx={{marginBottom:isMobile ? 2:4}}><ListItemIcon><CheckIcon/> </ListItemIcon> <ListItemText>Easy, Plug And Play Model</ListItemText>  </ListItem>
                <ListItem disablePadding sx={{marginBottom:isMobile ? 6:10}}><ListItemIcon><CheckIcon/> </ListItemIcon> <ListItemText>Commission Split 80% (agent) -20% (company)</ListItemText> </ListItem>
                <ListItem disablePadding><ListItemText>Sign Up By <b> Filling Out The Form</b>.</ListItemText> </ListItem>
                </List>
                
          </Grid>
         
       
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AgentForm />
      </Grid>
    </Grid>
  );
};

export default AgentConnect;
