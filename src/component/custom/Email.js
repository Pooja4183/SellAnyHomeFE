import EmailIcon from '@mui/icons-material/Email';

const Email = ({ objectWithEmail}) => {
    console.log("Email: ", objectWithEmail);
    let emailToDisplay = "contact@tomorrow.com";
    if(objectWithEmail) {
        emailToDisplay =  objectWithEmail.email? objectWithEmail.email: emailToDisplay;
    }
  return (
    <a href={`mailto:${emailToDisplay}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <EmailIcon style={{ verticalAlign: 'middle', color:'blueviolet' }}  /> {emailToDisplay}
    </a>
  );
};

export default Email;
