import EmailIcon from '@mui/icons-material/Email';

const Email = ({ objectWithEmail}) => {
    console.log("Number: ", objectWithEmail);
    let numberToDisplay = "contact@tomorrow.com";
    if(objectWithEmail) {
        numberToDisplay =  objectWithEmail.email;
    }
  return (
    <a href={`mailto:${numberToDisplay}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <EmailIcon style={{ verticalAlign: 'middle', color:'blueviolet' }}  /> {numberToDisplay}
    </a>
  );
};

export default Email;
