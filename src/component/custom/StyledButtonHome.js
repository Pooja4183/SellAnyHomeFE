import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/system";

const StyledButtonHome = styled(Button)(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
    padding: "0 5%",
    border: "none",
    letterSpacing: "2px",
    backgroundColor: blue[900],
    color: "white",
    borderRadius: 0,
    textTransform: "uppercase",
  }));

  export default StyledButtonHome;