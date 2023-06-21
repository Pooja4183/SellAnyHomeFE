import { Card, CardContent, Typography } from "@mui/material";
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
  
const Item = ({ text, value }) => {
    const colors = [cyan[400], grey[400], deepPurple[400], lime[400], red[200]];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <Card sx={{ mb: 3, height: 250, background: randomColor }} elevation={20}>
        <CardContent>
          <Typography variant="h3" component="h3">
            {text}
          </Typography>
          {/* Add content for latest sale bookings */}
        </CardContent>
      </Card>
    );
  };

  export default Item;