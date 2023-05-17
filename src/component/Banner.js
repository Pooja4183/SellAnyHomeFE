
import styles from './bannerStyle.module.css';
import React, { useState } from 'react';
import banerimg from '../images/banner_sellAnyHome.jpg';



const Banner = () => {

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
      <h2 text>Find The Perfect</h2>
  <h1>Luxury Home</h1>
  <label className={styles.label}>
  <input className={styles.bannerinput} type="text" placeholder='Address Neighborhood' value={address} onChange={inputEvent}/> 
  <button className={styles.button} onClick={onSubmit}>Search</button>
  </label>
  
      </div>
    </div>
    
  


    </div>

  
  
  


    
    



 


  );
};

export default Banner;
