import React from "react";
import styles from '../bannerStyle.module.css';
import banerimg from '../../images/SellBanner.jpg'
import { useHistory } from 'react-router-dom';

const HouseWorthForm=({ houseWorthInfo, handleHouseWorthChange }) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/sell/whoareyou');
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
            <h2 text>How Much Is My</h2>
            <h3>House Worth?</h3>
            <label className={styles.label}>
              <input
                className={styles.bannerinput}
                type="text"
                placeholder="Enter Your Full Address"
                name="address"
                value={houseWorthInfo.address}
                onChange={handleHouseWorthChange}
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

export default HouseWorthForm;
