import React from "react";
import styles from '../bannerStyle.module.css';
import banerimg from '../../images/SellBanner.jpg'
import { useHistory } from 'react-router-dom';

const PropertyDetailForm=({ propertyDetailInfo, handlePropertyDetailChange }) => {

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/sell/contact');
  }

  return (
    (
      <div>
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${banerimg})` }}
        >
          <div className={styles.luxeryHeader}>
            <form   onSubmit={handleSubmit}>
            <h2 text>Property Details</h2>
            <label className={styles.label}>
              <input
                className={styles.bannerinput}
                type="text"
                placeholder="Enter Your Full Address"
                value={propertyDetailInfo.address}
                onChange={handlePropertyDetailChange}
              />
              <button type = "submit" className={styles.button} >
                Estimate
              </button>
            </label>
            </form>
          </div>
        </div>
      </div>
    ) 
   
  );
}

export default PropertyDetailForm;
