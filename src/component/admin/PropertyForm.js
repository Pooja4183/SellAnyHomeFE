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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Approval, AttachFile, Save } from "@mui/icons-material";
import PropertyMaster from "../../master.json";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useEffect } from "react";
import { grey, red } from "@mui/material/colors";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import Gallery from "./Gallery";
import { useDispatch } from "react-redux";
import { createOrUpdateProduct } from "../../store/adminAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
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

const PropertyForm = ({ selectedProperty }) => {
  const dispatch = useDispatch();
  const [eventStatus, setEventStatus] = useState({
    isSuccess: false,
    msg: "",
    error: null,
  });
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    homeType: "",
    isBuy: false,
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
    img1: "/home.png",
    img2: "",
    yearBuilt: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    sellerType: "",
    isListed: "",
    sellDuration: "",
    amenities: [],
    status: "",
  });

  useEffect(() => {
    let isMounted = true;
    if (selectedProperty) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...selectedProperty,
      }));
      console.log("Effect Form Data::", formData);
    }
    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
      isMounted = false;
    };
  }, [selectedProperty]);

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
      console.log("Clicked::", clickedButton.id, " Evaluate ", clickedButton.id === "approveBtn");
      if (clickedButton.id === "approveBtn") {
        console.log("Submit button 1 clicked");
        // Access the updated formData value by using the callback function in setFormData
        await dispatch(createOrUpdateProduct(formData, "APPROVED"));
        msg= "Property Data Saved And Approved Successfully!";

      } else {
       
        await dispatch(createOrUpdateProduct(formData, "DRAFT"));
        msg= "Property Data Saved Successfully!";
      
      }
      console.log("Data::", formData);
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

  // Use the updated formData value outside of the handleSubmit function
  useEffect(() => {
    console.log("Updated Data:", formData);
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

  return (
    <>
      <Typography variant="h4" mt={-3} mb={-5} ml={1}>
        Property
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <Stack spacing={3}>
              <TextField
                label="ID (*match last 6 chars)"
                name="ID"
                value={formData.id}
                onChange={handleChange}
                fullWidth
                disabled
              />
              <TextField
                label="Property Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                multiline
                required
                rows={4}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item>
              <img
                src={formData.img1}
                alt=""
                loading="lazy"
                width="100%"
                height="166"
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleAvatarUpload}
              />
              <label htmlFor="file-input">
                <IconButton
                  component="span"
                  aria-label="Upload File"
                  onClick={handleIconButtonClick}
                >
                  <AttachFile />
                </IconButton>
              </label>
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
                name="bath"
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
      </form>
    </>
  );
};

export default PropertyForm;
