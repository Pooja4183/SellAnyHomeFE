import { Card, CardContent, CardHeader, Typography } from "@mui/material";
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
import { useState } from "react";
import PropertyCriteriaResult from "./PropertyCriteriaResult";
import SellBooking from "./SellBooking";
import BuyBooking from "./BuyBooking";

const Item = ({ type, text }) => {
  const colors = [cyan[400], purple[400], deepPurple[400], lime[400], red[200], yellow[700]];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [activeSection, setActiveSection] = useState("");

  return (
    <Card sx={{ mb: 3, height: 270, background: randomColor }} elevation={20}>
      <CardContent>
        <Typography variant="h5" component="h5" mb={1}>
          {text}
        </Typography>
        {type === "sell" && <SellBooking />}
        {type === "buy" && <BuyBooking />}
        {type === "all" && <BuyBooking />}
      </CardContent>
    </Card>
  );
};

export default Item;
