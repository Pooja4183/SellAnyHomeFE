import React from "react";
import styles from '../bannerStyle.module.css';
import banerimg from '../../images/SellBanner.jpg'
import { useHistory } from 'react-router-dom';

const ListingPlatformForm=({ listingPlatformInfo, handleListingPlatformChange }) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/sell/timeline');
  }
  return (
    (
      <div>
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${banerimg})` }}
        >
          <div className={styles.luxeryHeader}>
            <form  onSubmit={handleSubmit}>
            <h2 text>This Home Listed With Any of Listing Platform or With Brokers</h2>
            <label className={styles.label}>
              <input
                className={styles.bannerinput}
                type="text"
                placeholder="Enter Your Full Address"
                value={listingPlatformInfo.address}
                onChange={handleListingPlatformChange}
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

export default ListingPlatformForm;
