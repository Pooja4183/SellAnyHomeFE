import React from "react";
import styles from "../bannerStyle.module.css";
import banerimg from "../../images/SellBanner.jpg";

const ContactForm = ({
  houseWorthInfo,
  whoAreYouInfo,
  listingPlatformInfo,
  propertyDetailInfo,
  timelineInfo,
  contactInfo,
  handleContactChange,
}) => {
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <div className={styles.luxeryHeader}>
          <form    onSubmit={handleSubmit}>
            <h2 text>We'd Love To Connect With You</h2>
            <label className={styles.label}>
              <input
                className={styles.bannerinput}
                type="text"
                placeholder="Enter Your Full Address"
                value={contactInfo.address}
                onChange={handleContactChange}
              />
              <button type="submit" className={styles.button}>
                Estimate
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
