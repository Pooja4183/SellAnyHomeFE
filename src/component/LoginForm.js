import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { submitLoginSuccess } from "../store/loginAction";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    width: "100%",
    textAlign: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const successMessage = useSelector((state) => state.login.user);
  const errorMessage = useSelector((state) => state.login.error);

  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here, you can add logic to handle form submission (e.g., authentication).
    console.log("Form data submitted:", formData);
    console.log("Clicked Formed", event.name, formData);
    try {
      const response = await dispatch(submitLoginSuccess(formData));
      console.log("Response", response);
      if (response.status === 200) {
        setSuccess(true);
        setError(null);
        history.push("/admin");
      } else if (response.status === 401) {
        setSuccess(false);
        setError("Unauthorized");
      } else {
        setSuccess(false);
        setError("Server Error");
      }
    } catch (error) {
      setSuccess(false);
      setError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            className={classes.textField}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
          >
            Login
          </Button>
          {isSuccess && (
            <Typography
              variant="success"
              sx={{ marginTop: 2, marginLeft: 1, color: "green" }}
            >
              Authentication Successfull!
            </Typography>
          )}
          {error && (
            <Typography variant="error" sx={{ marginTop: 2, marginLeft: 1, color: 'red' }}>
              Invalid Credentials!
            </Typography>
          )}
        </form>
      </Paper>
    </div>
  );
};

export default LoginForm;
