import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)`
  width: fit-content;
  border: 1px solid rgb(0, 0, 222);
  border-radius:20px;
  margin-top:2%;
  padding: 15px 30px;
  font-size: small;
  text-transform: capitalize;
  color:black;
  font-weight: bold;
`;

export default StyledButton;
