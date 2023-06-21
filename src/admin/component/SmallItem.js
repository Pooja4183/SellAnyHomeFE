import { Grid, Paper, Typography } from "@mui/material";
import {
    purple,
    red,
    deepOrange,
    deepPurple,
    white,
    blue,
    green,
    yellow,
    orange,
    cyan,
    lime,
    grey,
  } from "@mui/material/colors";
  
const SmallItem = ({ text, value }) => {
    const colors = [purple[400], blue[500], green[400], yellow[900], orange[400]];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <Paper
        sx={{
          background: randomColor,
          padding: 2,
          marginBottom: 2,
          color: "white",
        }}
        elevation={20}
      >
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Typography variant="h5" component="h5">
              {text}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ textAlign: "right", border:1, borderRadius:5 ,padding:1 }} >
              {value || 0}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  export default SmallItem;