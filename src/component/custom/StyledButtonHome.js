import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButtonHome = styled(Button)(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
    padding: "0 5%",
    border: "none",
    letterSpacing: "2px",
    backgroundColor: '#0025e1',
    color: "white",
    borderRadius: 0,
    textTransform: "uppercase",
  }));

  export default StyledButtonHome;