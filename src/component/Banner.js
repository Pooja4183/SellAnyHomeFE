import styles from "./bannerStyle.module.css";
import React, { useState, useEffect } from "react";
import banerimg from "../images/banner_sellAnyHome.jpg";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const inputEvent = (event) => {
    console.log(event.target.value);
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  useEffect(()=> {
    if(isSubmitted) {
      history.push('/search-result')
    }

  },[isSubmitted, history]);

  return (
    <div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <div className={styles.luxeryHeader}>
          <form onSubmit={handleSubmit}>
          <h2 text>Find The Perfect</h2>
          <h1>Luxury Home</h1>
          <label className={styles.label}>
            <input
              className={styles.bannerinput}
              type="text"
              placeholder="Address Neighborhood"
              value={address}
              onChange={inputEvent}
            />
            <button className={styles.button} type="submit">
              Search
            </button>
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
