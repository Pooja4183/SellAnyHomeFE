import { FormControl, Grid, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import StyledInputLabel from "../custom/StyledInputLabel";
import StyledButton from "../custom/StyledButton";
import StyledTextField from "../custom/StyledTextField";
import StyledSelect from "../custom/StyledSelect";
import { useState } from "react";
import PropertyDetail from "../../master.json";

const AgentForm = () => {
    const [formData, setFormData] = useState({
        "name" : "",
        "email" : "",
        "phone" : "",
        "salesVolume" : ""
    })

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data::", formData);
      }
  return (
    <>
    <Paper variant="none" component={"form"} sx={{padding: 2}} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} lg={8}>
          <StyledTextField label="Full Name" name="name" fullWidth value={formData.name} required onChange={handleChange}></StyledTextField>
        </Grid>
        <Grid item xs={8} sm={8} lg={8}>
          <StyledTextField label="Personal Email" name="email" type="email" fullWidth value={formData.email}  onChange={handleChange}></StyledTextField>
        </Grid>
        <Grid item xs={8} sm={8} lg={8}>
          <StyledTextField label="Preferred Phone" name="phone" fullWidth value={formData.phone} required onChange={handleChange}></StyledTextField>
        </Grid>
        <Grid item xs={8} sm={8} lg={8}>
          <Typography variant="p">
            What is your individual yearly sales volume?
          </Typography>
          <FormControl fullWidth sx={{mt:1, mb:1}}>
             
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
            By submitting this form I accept the Privacy Policy and Terms of Service.
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
            <StyledButton type="submit" >Submit</StyledButton>

        </Grid>
      </Grid>
      </Paper>
    </>
  );
};
const AgentConnect = () => {
  return (
    <Grid container spacing={5} mt={5}>
      <Grid item xs={6} sm={6} lg={6} sx={{textAlign: "center"}}>
        <Typography variant="h1">Let's Chat</Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <AgentForm />
      </Grid>
    </Grid>
  );
};

export default AgentConnect;
