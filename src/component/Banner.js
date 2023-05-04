
import styles from './bannerStyle.module.css';
import React from 'react';
import Header from './Header'



const Banner = () => {
  return (

  
    
     <div className={styles.banner} >
    <Header /> 

    <div className="luxeryHeader">
      
      <h2 text>Find the Perfect</h2>
  <h3>Luxery Home</h3>
  <input type="text" /> <button>Search</button>
      </div>
 
    </div>

  
 


  );
};

export default Banner;
