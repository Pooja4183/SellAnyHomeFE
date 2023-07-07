import { Grid, Paper, Typography } from "@mui/material";
import {
  purple, blue,
  green,
  yellow,
  orange
} from "@mui/material/colors";
import { useState } from "react";

const SmallItem = ({ text, value, onClick }) => {
  const colors = [purple[400], blue[500], green[400], yellow[900], orange[400]];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) {
      onClick(); // Call the onClick prop to perform the desired action
    }
    // Remove the clicked state after a short delay (e.g., 300 milliseconds)
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <Paper
      sx={{
        background: isClicked ? "gray" : randomColor,
        padding: 2,
        marginBottom: 2,
        color: "white",
        alignItems: "baseline",
      }}
      elevation={20}
      onClick={handleClick}
    >
      <Grid container spacing={4}>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ textAlign: "right", border: 1, borderRadius: 5, padding: 1 }}
          >
            {value || 0}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h5" component="h5" sx={{ textAlign: "right" }}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SmallItem;
