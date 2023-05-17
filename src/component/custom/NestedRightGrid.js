import Grid from "@mui/material/Grid";
import Sellstyle from "./NestedGrid.module.css";

const NestedRightGrid = ({title, value}) => {
  
    return (
        <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          textAlign: {
            xs: "center",
            sm: "center",
            lg: "left",
            md: "left",
          },
        }}
        className={Sellstyle.formstyle}
      >
        <div className={Sellstyle.label}>
          <p>{title}</p>
          <h5>{value}</h5>
        </div>
      </Grid>
    );
}

export default NestedRightGrid;