
import styles from './bannerStyle.module.css';
import React, { useState } from 'react';
import banerimg from '../images/SellBanner.jpg'



const SellComp = () => {

  const [address, setAddress] = useState('');
  const [fullAddress ,setfulladdress] = useState();

  
  const inputEvent = (event)=>{
    console.log(event.target.value);
    setAddress(event.target.value)

  }


  const onSubmit= ()=>{
    setfulladdress(fullAddress);
  }

  return (

    <div>
       <div className={styles.banner} style={{backgroundImage:`url(${banerimg})`}}>
          <div className={styles.luxeryHeader}>
      <h2 text>How Much Is My</h2>
  <h3>House Worth?</h3>
  <label className={styles.label}>
  <input className={styles.bannerinput} type="text" placeholder='Enter Your Full Address' value={address} onChange={inputEvent}/> 
  <button className={styles.button} onClick={onSubmit}>Estimate</button>
  </label>
  
      </div>
    </div>
    
  


    </div>

  
  
  


    
    



 


  );
};

export default SellComp;
