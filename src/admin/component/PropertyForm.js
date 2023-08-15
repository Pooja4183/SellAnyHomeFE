import { Approval, AttachFile, Delete, Save } from "@mui/icons-material";
import RoofingIcon from "@mui/icons-material/Roofing";
import {
  Badge,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { experimentalStyled as styled } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import PropertyMaster from "../../master.json";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../Firebase";
import AlertMessage from "../../component/custom/AlertMessage";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchAgents,
} from "../../store/adminAction";
import Gallery from "./Gallery";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
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

const PropertyForm = ({ selectedProperty, editable, direct, handleClose }) => {
  const agents = useSelector((state) => state.admin.agents);
  const dispatch = useDispatch();
  const [eventStatus, setEventStatus] = useState({
    isSuccess: false,
    msg: "",
    error: null,
  });

  const [formData, setFormData] = useState({
    id: "",
    homeType: "",
    isBuy: true, // Significance of property directly listed for Buying.
    bed: "",
    bath: "",
    price: "",
    currency: "",
    sqFt: "",
    address: "",
    city: "",
    state: "",
    title: "",
    description: "",
    images: [],
    img1: "/home3.jpg",
    img2: "",
    yearBuilt: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    sellerType: "",
    isListed: "",
    sellDuration: "",
    amenities: [],
    agent:{
      _id:"",
      name: ""
    },
    status: "",
  });

  useEffect(async () => {
    let isMounted = true;
  
    // Fetch agents data
    await dispatch(fetchAgents());
  
    console.log("Selected Property::", selectedProperty);
  
    if (selectedProperty) {
      // Update the agent field with nested properties
      if(selectedProperty.agent) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          ...selectedProperty,
          agent: {
            _id: selectedProperty.agent._id, // Keep the existing _id
            name: selectedProperty.agent.name, // Keep the existing name
          },
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          ...selectedProperty,
          agent: {
            _id:"", 
            name: "", 
          },
        }));
      }
     
  
      console.debug("Effect Form Data::", formData);
    }
  
    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
      isMounted = false;
    };
  }, [selectedProperty]); // Include 'agents' in the dependency array
  


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    console.log("Name::", name, " Value::", newValue);
    if (name === "agent") {
      // For the agent field, set the _id as the value
      setFormData((prevFormData) => ({
        ...prevFormData,
        agent: {
          ...prevFormData.agent,
          _id: newValue, // Set the _id of the selected agent
        },
      }));
    } else {
      // For other fields, update as usual
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue,
      }));
    }
  };
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form logic here
    let msg = "";
    console.debug("Submitted", formData);
    try {
      const clickedButton = event.nativeEvent.submitter;
      console.debug(
        "Clicked::",
        clickedButton.id,
        " Evaluate ",
        clickedButton.id === "deleteBtn"
      );
      if (clickedButton.id === "approveBtn") {
        console.debug("Submit button 1 clicked");
        // Access the updated formData value by using the callback function in setFormData
        console.debug(
          "Editable ::",
          editable,
          "Selected Property::",
          selectedProperty
        );
        if (selectedProperty && selectedProperty.id) {
          await dispatch(updateProduct(formData, "APPROVED"));
        } else {
          await dispatch(createProduct(formData, "APPROVED"));
        }
        msg = "Property Data Saved And Approved Successfully!";
      } else if (clickedButton.id === "saveBtn") {
        console.debug("Clicked Save Button::", selectedProperty);
        if (selectedProperty && selectedProperty.id) {
          console.debug("Updating property ", formData, "Status:", "draft")
          await dispatch(updateProduct(formData, "DRAFT"));
        } else {
          console.debug("Creating property ", formData, "Status:", "draft");
          await dispatch(createProduct(formData, "DRAFT"));
        }
        msg = "Property Data Saved Successfully!";
      } else if (clickedButton.id === "deleteBtn") {
        console.debug("Clicked Delete");
        await dispatch(deleteProduct(formData));
        msg = `Property ${formData.id} is Deleted Successfully!`;
      }
      console.debug("Data::", formData);
      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
      setShowAlert(true);
      // Hide the message and close the form after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
        handleClose();
      }, 3000);
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: "An Error Occured: " + error.message,
      });
    }
  };

  // Use the updated formData value outside of the handleSubmit function
  useEffect(() => {
    console.debug("Updated Data:", formData);
  }, [formData]);

  const handleCheckboxChange = (value) => (event) => {
    const { value, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      amenities: checked
        ? [...prevFormData.amenities, value] // add the selected option
        : prevFormData.amenities.filter((option) => option !== value), // remove the deselected option
    }));
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
      img1: imageUrl,
    }));
    console.debug("Form Data", formData);
  };

  const fileInputGalleryRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleGalleryIconButtonClick = () => {
    fileInputGalleryRef.current.click();
  };

  const handleImageGalleryUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    const storageRef = ref(storage, file.name); // Create a reference to the storage location
    await uploadBytes(storageRef, file); // Upload the file to the storage location
    const imageUrl = await getDownloadURL(storageRef); // G
    console.debug("Gallery URL", imageUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, imageUrl],
    }));
    console.debug("Form Data", formData);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Paper elevation={24} sx={{ padding: 1, mb: 5 }}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{ paddingTop: 1, mb: 1, background: blue[200] }}
          justifyContent={"space-between"}
        >
          <Grid item xs={6} sm={6} lg={6} pb={1}>
            <IconButton>
              <RoofingIcon />
              <Typography sx={{ paddingLeft: 2, color: grey[900] }}>
                {" "}
                Property : {formData.id}
              </Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="saveBtn"
              size="small"
            >
              Save
              <Save />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginLeft: 0.5 }}
              id="approveBtn"
              size="small"
            >
              Approve
              <Approval />
            </Button>
            {formData.id && (
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ marginLeft: 0.5, mr: 0.5 }}
                id="deleteBtn"
                size="small"
              >
                DELETE
                <Delete />
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            {eventStatus.isSuccess && (
              <>
                <AlertMessage
                  type="success"
                  message={eventStatus.msg}
                  open={showAlert}
                  onClose={handleCloseAlert}
                />
              </>
            )}
            {eventStatus.error && (
              <AlertMessage
                type="error"
                message={eventStatus.error}
                open={showAlert}
                onClose={handleCloseAlert}
              />
            )}
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} lg={6} mt={1}>
            <TextField
              label="Property Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              required
              rows={16}
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={6} sx={{ display: "flex" }}>
            <Item>
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
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <img
                  src={formData.img1}
                  alt=""
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "scale-down",
                  }}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleAvatarUpload}
                />
              </Badge>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Property Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Property Full Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              multiline
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>How Many Beds</InputLabel>
              <Select
                name="bed"
                value={formData.bed}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.beds.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>How Many Baths</InputLabel>
              <Select
                name="bath"
                value={formData.bath}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.baths.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Property Size"
              name="sqFt"
              type="number"
              value={formData.sqFt}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Property Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Home Type</InputLabel>
              <Select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.propertyType.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Year Built"
              name="yearBuilt"
              type="number"
              value={formData.yearBuilt}
              onChange={handleChange}
              fullWidth
              inputProps={{
                min: 2000,
              }}
              size="small"
            />
          </Grid>
          {!direct && (
            <>
            <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Name"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Phone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Seller Type"
              name="sellerType"
              value={formData.sellerType}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Is Listed</InputLabel>
              <Select
                name="isListed"
                value={formData.isListed}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.isListed.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          </>
          )}
           
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Agent</InputLabel>
                <Select
                  name="agent"
                  value={formData.agent._id}
                  onChange={handleChange}
                  required
                  size="small"
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                  {agents.map((agent) => (
                    <MenuItem key={agent._id} value={agent._id}>
                      {agent.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Availability Duration</InputLabel>
              <Select
                name="sellDuration"
                value={
                  PropertyMaster.duration.find(
                    (option) =>
                      formData.sellDuration.toLowerCase() ===
                      option.toLowerCase()
                  ) || ""
                }
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.duration.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <BorderItem title="Amenities">
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    {PropertyMaster.amenities.map((option) => (
                      <Grid item xs={2} sm={4} md={4} key={option}>
                        <FormControlLabel
                          key={"fcl" + option}
                          control={
                            <Checkbox
                              name="amenities"
                              value={option}
                              checked={formData.amenities.includes(option)}
                              onChange={handleCheckboxChange(option)}
                            />
                          }
                          label={option}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </BorderItem>
          </Grid>
          <Grid item>
            <BorderItem title="Image Gallery">
              <Gallery list={formData.images} />
            </BorderItem>
            <div>
              <input
                type="file"
                ref={fileInputGalleryRef}
                style={{ display: "none" }}
                onChange={handleImageGalleryUpload}
              />
              <label htmlFor="file-input">
                <IconButton
                  component="span"
                  aria-label="Upload File"
                  onClick={handleGalleryIconButtonClick}
                >
                  <AttachFile />
                </IconButton>
              </label>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="saveBtn"
              size="small"
            >
              Save
              <Save />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ marginLeft: 0.5 }}
              id="approveBtn"
              size="small"
            >
              Approve
              <Approval />
            </Button>
            {formData.id && (
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ marginLeft: 0.5, mr: 0.5 }}
                id="deleteBtn"
                size="small"
              >
                DELETE
                <Delete />
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default PropertyForm;
