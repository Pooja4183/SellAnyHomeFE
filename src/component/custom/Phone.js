import PhoneIcon from '@mui/icons-material/Phone';

const Phone = ({objectWithPhone}) => {
    console.log("Number: ", objectWithPhone);
    let numberToDisplay = 88598444578;
    if(objectWithPhone) {
        numberToDisplay =   objectWithPhone.phone?  objectWithPhone.phone: numberToDisplay;
    }
  return (
    <a href={`tel:${numberToDisplay}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <PhoneIcon style={{ verticalAlign: 'middle', color:'blue' }}  /> {numberToDisplay}
    </a>
  );
};

export default Phone;
