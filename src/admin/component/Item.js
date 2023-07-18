import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import {
  purple,
  red,
  deepPurple,
  yellow,
  cyan,
  lime,
} from "@mui/material/colors";
import BuyBooking from "./BuyBooking";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Item = ({ type, text, selectedItem, onItemSelect }) => {
  const colors = [
    cyan[400],
    purple[400],
    deepPurple[400],
    lime[400],
    red[200],
    yellow[700],
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];



  return (
    <Card sx={{ mb: 3, height: 270, background: randomColor }} elevation={20}>
      <CardHeader
        action={
          <IconButton aria-label="More...">
            <MoreVertIcon />
          </IconButton>
        }
        title={text}
        sx={{ mb: -4, mt: -1 }}
      />
      <CardContent>
        {type === "sell" && (
          <BuyBooking
            type="buy"
            text="Sell Booking"
            onItemSelect={onItemSelect}
            selectedItem={selectedItem}
          />
        )}
        {type === "buy" && (
          <BuyBooking
            type="buy"
            text="Buy Booking"
            onItemSelect={onItemSelect}
            selectedItem={selectedItem}
          />
        )}
        {type === "direct" && (
          <BuyBooking
            type="direct"
            text="Direct Created"
            onItemSelect={onItemSelect}
            selectedItem={selectedItem}
          />
        )}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Item;
