import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsApp = ({objectWithPhone}) => {
    let numberToDisplay = 88598444578;
    if(objectWithPhone) {
        numberToDisplay =  objectWithPhone.Phone;
    }
  return (
    <a href={`https://wa.me/${numberToDisplay}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <WhatsAppIcon style={{ verticalAlign: 'middle', color:'green' }}  /> {numberToDisplay}
    </a>
  );
};

export default WhatsApp;
