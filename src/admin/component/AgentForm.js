import React, { useState, useRef } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  FormGroup,
  Paper,
  Stack,
  IconButton,
  Box,
  Badge,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Approval, AttachFile, Save } from "@mui/icons-material";
import PropertyMaster from "../../master.json";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useEffect } from "react";
import { grey, blue } from "@mui/material/colors";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import { useDispatch } from "react-redux";
import { createAgent, createOrUpdateAgent } from "../../store/adminAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
}));

const EditIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  border: `2px solid ${grey[300]}`, // Border style
  borderRadius: "50%", // Border radius
}));

const BorderItem = styled(Paper)(({ theme, title }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  position: "relative", // Add position relative to the container

  "&::before": {
    content: "''", // Empty content
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: `2px solid ${grey[300]}`, // Border style
    borderRadius: theme.shape.borderRadius, // Border radius
    pointerEvents: "none", // Make it ignore pointer events
  },

  "&::after": {
    content: `'${title}'`, // Text content
    position: "absolute",
    top: "-10px",
    left: "10px",
    fontSize: "12px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    padding: "2px 6px",
    borderRadius: theme.shape.borderRadius,
  },
}));

const AgentForm = ({ selectedItem, editable }) => {
  const dispatch = useDispatch();
  const [eventStatus, setEventStatus] = useState({
    isSuccess: false,
    msg: "",
    error: null,
  });
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    img: "/profile.png",
    name: "",
    email: "",
    phone: "",
    salesVolume: "",
    status: ""
  });

  useEffect(() => {
    let isMounted = true;
    if (selectedItem) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...selectedItem,
      }));
    }
    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
      isMounted = false;
    };
  }, [selectedItem]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form logic here
    let msg = "";
    console.log("Submitted", formData);
    try {
      const clickedButton = event.nativeEvent.submitter;
      console.log(
        "Clicked::",
        clickedButton.id,
        " Evaluate ",
        clickedButton.id === "approveBtn"
      );
      if (clickedButton.id === "approveBtn") {
        console.log("Submit button 1 clicked");
        // Access the updated formData value by using the callback function in setFormData
        if(editable){
          await dispatch(createOrUpdateAgent(formData, "APPROVED"));
        } else{
          await dispatch(createAgent(formData, "APPROVED"));
        }
       
        msg = "Agent Data Saved And Approved Successfully!";
      } else {
        if(editable){
          await dispatch(createOrUpdateAgent(formData, "DRAFT"));
        } else{
          await dispatch(createAgent(formData, "DRAFT"));
        }
        msg = "Agent Data Saved Successfully!";
      }

      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: "An Error Occured: " + error.message,
      });
    }
  };

  const fileInputRef = useRef(null);

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);

  const handleIconButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewAvatar(reader.result);
    };
    reader.readAsDataURL(file);

    const storageRef = ref(storage, file.name); // Create a reference to the storage location
    await uploadBytes(storageRef, file); // Upload the file to the storage location
    const imageUrl = await getDownloadURL(storageRef); // G
    console.debug("Avatar URL", imageUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      img: imageUrl,
    }));
    console.debug("Form Data", formData);
  };




  return (
    <Paper elevation={24} sx={{ padding: 1, mb: 5 }}>
      <Grid
        container
        sx={{ paddingTop: 1, mb: 1, background: blue[200] }}
        justifyContent={"space-between"}
      >
        <Grid item xs={6} sm={6} lg={6}>
          <Typography variant="h4" sx={{ paddingLeft: 2 }}>
            Agent : {formData.id}
          </Typography>
        </Grid>
      </Grid>

        <Grid container spacing={2} component={"form"} onSubmit={handleSubmit}>
          <Grid item xs={9} sm={9} lg={9}>
            <Stack spacing={1}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                size="small"
              />
              <TextField
                label="Personal Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                size="small"
              />
              <TextField
                label="Preferred Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                multiline
                required
                size="small"
              />
            </Stack>
          </Grid>
          <Grid item xs={3} sm={3} lg={3}>
          <Badge
              badgeContent={
                <label htmlFor="file-input">
                  <IconButton
                    component="span"
                    aria-label="Upload File"
                    onClick={handleIconButtonClick}
                  >
                    <AttachFile />
                  </IconButton>
                </label>
              }
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <img
                src={formData.img}
                alt=""
                loading="lazy"
                width={"100%"}
                height={"100%"}
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleAvatarUpload}
              />
            </Badge>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel>What is your Individual Sales Volume? </InputLabel>
              <Select
                name="salesVolume"
                value={formData.salesVolume}
                onChange={handleChange}
                size="small"
              >
                {PropertyMaster.agentSalesVolume.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {eventStatus.isSuccess && (
              <Typography
                variant="success"
                sx={{ marginTop: 2, marginLeft: 1, color: "green" }}
              >
                {eventStatus.msg}
              </Typography>
            )}
            {eventStatus.error && (
              <Typography variant="error" sx={{ marginTop: 2, marginLeft: 1 }}>
                {eventStatus.error}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="saveBtn"
            >
              Save
              <Save sx={{ marginLeft: 1 }} />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginLeft: 2 }}
              id="approveBtn"
            >
              Save And Approve
              <Approval sx={{ marginLeft: 1 }} />
            </Button>
          </Grid>
        </Grid>
    </Paper>
  );
};

export default AgentForm;
