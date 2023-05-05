
import styles from './bannerStyle.module.css';
import React from 'react';
import banerimg from '../images/banner_sellAnyHome.jpg'



const Banner = () => {
  return (

    <div>
       <div className={styles.banner} style={{backgroundImage:`url(${banerimg})`}}>
          <div className={styles.luxeryHeader}>
      <h1 text>Find the Perfect</h1>
  <p>Luxery Home</p>
  <input type="text" /> <button>Search</button>
      </div>
    </div>
    
  


    </div>

  
  
  


    
    



 


  );
};

export default Banner;
