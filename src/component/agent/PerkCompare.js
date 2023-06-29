import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const Slide = ({ title, highlight }) => {
  return (
    <Card
      sx={{ width: 400, backgroundColor: highlight ? "inherit" : grey[100] }}
    >
      <CardHeader title={title}></CardHeader>
      <CardContent sx={{ mb: 15, mt: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} lg={6} sx={{ borderBottom: 1 }}>
            Example Sale Price
          </Grid>
          <Grid item xs={6} sm={6} lg={6} sx={{ borderBottom: 1 }}>
            AED 10,000,000
          </Grid>
          <Grid item xs={6} sm={6} lg={6} sx={{ borderBottom: 1 }}>
            Brokerage Fees (2%)
          </Grid>
          <Grid item xs={6} sm={6} lg={6} sx={{ borderBottom: 1 }}>
            AED 2,00,000
          </Grid>

          <Grid item xs={6} sm={6} lg={6} sx={{ borderBottom: 1 }}>
            Agent Split Fees (80%)
          </Grid>
          <Grid item xs={6} sm={6} lg={6} sx={{ borderBottom: 1 }}>
            AED 1,60,000
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
const PerkCompare = () => {
  return (
    <>
      <Stack direction={"row"} sx={{ justifyContent: "center", mt: 5 }}>
        <Slide title="Tomorrow" highlight />
        <Slide title="Traditional Brokerage Company" />
      </Stack>
      <center>
        <Typography variant="p">
          Partner Fees Annually - AED 1500 per month
        </Typography>
      </center>
    </>
  );
};

export default PerkCompare;
