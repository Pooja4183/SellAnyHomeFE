import { Card, CardContent, Typography } from "@mui/material";
import {
  purple, blue, orange
} from "@mui/material/colors";

  import OLMap from "../../component/custom/Map";
import HistogramChart from "./HistogramChart";
  
const LargeItem = ({type, text }) => {
    const colors = [blue[100], orange[100], purple[100]];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <Card sx={{ mb: 3, height: 400, background: randomColor }} elevation={20}>
        <CardContent>
          <Typography variant="h5" component="h5">
            {text}
          </Typography>
          
          {type === "map" &&  <OLMap height="100"/>}
          {type === "chart" &&  <HistogramChart /> }
        </CardContent>
      </Card>
    );
  };

  export default LargeItem;