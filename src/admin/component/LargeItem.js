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
  
const LargeItem = ({ text, value }) => {
    const colors = [blue[100], orange[100], purple[100]];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <Card sx={{ mb: 3, height: 250, background: randomColor }} elevation={20}>
        <CardContent>
          <Typography variant="h3" component="h3">
            {text}
          </Typography>
          {/* Add content for graph */}
        </CardContent>
      </Card>
    );
  };

  export default LargeItem;