import styles from "../bannerStyle.module.css";
import React, { useState} from "react";
import banerimg from "../../images/banner_sellAnyHome.jpg";
import { useHistory } from "react-router-dom";

const SellComponent = () => {
  const history = useHistory();
  const [houseWorthInfo, setHouseWorthInfo] = useState("");

  const handleHouseWorthChange = (event) => {
    setHouseWorthInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/sell-landing?houseWorth=" + houseWorthInfo);
  };

  const isFormValid = houseWorthInfo.trim() !== "";

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${banerimg})` }}
    >
      <div className={styles.luxeryHeader}>
        <form onSubmit={handleSubmit}>
          <h2 text>How Much Is My</h2>
          <h1>House Worth?</h1>
          <label className={styles.label}>
            <input
              className={styles.bannerinput}
              type="text"
              placeholder="Enter Your Full Address"
              name="address"
              value={houseWorthInfo.address}
              onChange={handleHouseWorthChange}
            />
            <button type="submit" className={styles.button} disabled={!isFormValid}>
              Estimate
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SellComponent;
