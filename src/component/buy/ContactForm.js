import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitBuyerInterest } from "../../store/buyContactAction";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const ContactForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const successMessage = useSelector((state) => state.buyContact.contact);
  const errorMessage = useSelector((state) => state.buyContact.error);

  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moreInfo: "",
    propertyId: id,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, propertyId: id });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Clicked Formed", event.name, formData);
    try {
      await dispatch(submitBuyerInterest(formData));
      setSuccess(true);
      setError(null);
    } catch (error) {
      setSuccess(false);
      setError(error.message);
    }
  }
  return (
    <Box
      sx={{
        width: 400,
        maxWidth: "100%",
        margin: 1,
        borderTop: 0.5,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack spacing={2} sx={{ width: 380, marginTop: 5, marginLeft: 1 }}>
        <Typography variant="h6" sx={{ textAlign: "left", fontWeight: "bold" }}>
          CONTACT TEAM(S)
        </Typography>

        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          required
          name="name"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          id="fullWidth"
          required
          type="email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone"
          id="fullWidth"
          required
          name="phone"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="i would like to gain more information about..."
          id="fullWidth"
          multiline
          rows={4}
          name="moreInfo"
          onChange={handleChange}
        />
      </Stack>
      
      {isSuccess && (
        <Typography variant="success" sx={{ marginTop: 2, marginLeft: 1, color: "green"}}>
          Your message has been sent successfully!
        </Typography>
      )}
      {error && (
        <Typography variant="error" sx={{ marginTop: 2, marginLeft: 1 }}>
          An error occurred: {error}
        </Typography>
      )}
      <Button
        variant="outlined"
        sx={{ marginTop: 2, marginLeft: 1 }}
        type="submit"
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
