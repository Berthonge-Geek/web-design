import { useState } from 'react';
import SaveThePlanetContainer from "../components/SaveThePlanetContainer";
import FormContainer from "../components/FormContainer";
import styles from "./WebFinal.module.css";

const WebFinal = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const containerClassName = `${styles.webFinal} ${isDarkMode ? styles.darkMode : ''}`;

  return (
    <div className={containerClassName}>
      <div className={styles.frame}>
        <b className={styles.aboutUs}>About us</b>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <SaveThePlanetContainer />
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.loremIpsumDolor}>
          Embrace the urgency, empower change! Join hands in the global movement to combat climate change.
           
          Our planet is at a critical crossroads, and it's time to take action. 
          Let this banner be a symbol of our commitment to a sustainable future. Together, we can make a difference.
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
      <FormContainer />
      
      {/* Toggle Dark Mode button */}
      <button className={styles.toggleDarkModeButton} onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default WebFinal;
