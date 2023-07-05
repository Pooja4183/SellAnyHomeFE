import { Card, CardContent, Typography } from "@mui/material";
import {
  purple,
  red, deepPurple, yellow, cyan,
  lime
} from "@mui/material/colors";
import { useState } from "react";
import SellBooking from "./SellBooking";
import BuyBooking from "./BuyBooking";

const Item = ({ type, text,onItemSelect }) => {
  const colors = [cyan[400], purple[400], deepPurple[400], lime[400], red[200], yellow[700]];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [activeSection, setActiveSection] = useState("");
  // const [selectedItem, setSelectedItem] = useState(null);
  // function onItemSelect(item) {
  //   console.log("elected Item", selectedItem);
  // }

  // useEffect(()=> {
  //   console.log("Selected Item", selectedItem);  
  // },[selectedItem]);

  return (
    <Card sx={{ mb: 3, height: 270, background: randomColor }} elevation={20}>
      <CardContent>
        <Typography variant="h5" component="h5" mb={1}>
          {text}
        </Typography>
        {type === "sell" && <SellBooking onItemSelect={onItemSelect}/>}
        {type === "buy" && <BuyBooking type="buy" onItemSelect={onItemSelect}/>}
        {type === "direct" && <BuyBooking  type="direct" onItemSelect={onItemSelect}/>}
      </CardContent>
    </Card>
  );
};

export default Item;
