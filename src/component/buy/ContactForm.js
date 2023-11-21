import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitBuyerInterest } from "../../store/buyContactAction";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import styles from '../../component/product/product.module.css'

const ContactForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const successMessage = useSelector((state) => state.buyContact.contact);
  const errorMessage = useSelector((state) => state.buyContact.error);
  const moreInfoMessage = `Hi, I found your property with Ref: TM${id.slice(18)}. Please contact me. Thank you`;
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moreInfo: `${moreInfoMessage}`,
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
        borderTop: 0.5,
        
      }}
      component="form"
      onSubmit={handleSubmit}
     
    >
      <Stack spacing={2} sx={{ width: [325,500,350], marginTop: 3}} >
        <Typography variant="h3" sx={{ textAlign: "left", fontWeight: "bold" }}>
          CONTACT TEAM
        </Typography>

        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          required
          name="name"
          onChange={handleChange}
          size="small"
          
        />
        <TextField
          fullWidth
          label="Email"
          id="fullWidth"
          required
          type="email"
          name="email"
          onChange={handleChange}
          size="small"
        />
        <TextField
          fullWidth
          label="Phone"
          id="fullWidth"
          required
          name="phone"
          onChange={handleChange}
          size="small"
        />
        <TextField
          fullWidth
          label="Message"
          id="fullWidth"
          multiline
          rows={4}
          name="moreInfo"
          onChange={handleChange}
          size="small"
          value={moreInfoMessage}
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
        sx={{ marginTop: 2, marginLeft: 0}}
        type="submit"
        
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
