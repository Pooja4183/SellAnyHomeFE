import Grid from "@mui/material/Grid";
import Sellstyle from "./NestedGrid.module.css";

const NestedLeftGrid = ({title, children}) => {
  
    return (
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
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
          <h1 className={Sellstyle.whoAreyou}>{title}</h1>
          {children}
        
        </Grid>
    );
  };

  export default NestedLeftGrid;