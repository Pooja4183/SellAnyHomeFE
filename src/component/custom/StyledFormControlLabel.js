
import { styled } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledFormControlLabel = styled(FormControlLabel)`
  border: 2px solid rgb(222, 222, 222);
  border-radius: 20px;
  width: 400px;
  display: flex;
  align-items: center;
  margin: 0px;

  .MuiFormControlLabel-label {
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default StyledFormControlLabel;