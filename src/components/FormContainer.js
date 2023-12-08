import Group1 from "./Group1";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <Group1
          imageResolution="/group1.svg"
          groupIconWidth="100%"
          groupIconHeight="60.44%"
          groupIconPosition="absolute"
          groupIconTop="0%"
          groupIconRight="-0.02%"
          groupIconBottom="39.56%"
          groupIconLeft="0.02%"
          groupIconMaxWidth="100%"
          groupIconOverflow="hidden"
          groupIconMaxHeight="100%"
        />
        <div className={styles.frame3}>
          <b className={styles.loremIpsum}>LOREM IPSUM</b>
        </div>
        <div className={styles.frame4}>
          <b className={styles.articles}>Articles</b>
        </div>
        <div className={styles.frame5}>
          <div className={styles.frameParent}>
            <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            <div className={styles.copyright}>© 2023</div>
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.subtitleParent}>
            <b className={styles.subtitle}>About us</b>
            <b className={styles.link}>Home</b>
            <b className={styles.subtitle2}>Articles</b>
            <b className={styles.subtitle3}>Contact</b>
          </div>
        </div>
        <div className={styles.frame7}>
          <div className={styles.frameGroup}>
            <div className={styles.frame8}>
              <div className={styles.link}>Loremipsum</div>
              <div className={styles.link1}>Loremipsum</div>
              <div className={styles.link2}>Loremipsum</div>
              <div className={styles.link3}>Loremipsum</div>
            </div>
            <div className={styles.frame9}>
              <div className={styles.link}>Loremipsum</div>
              <div className={styles.link1}>Loremipsum</div>
              <div className={styles.link2}>Loremipsum</div>
              <div className={styles.link3}>Loremipsum</div>
            </div>
          </div>
        </div>
        <div className={styles.frame10}>
          <img className={styles.frameIcon1} alt="" src="/frame4@2x.png" />
        </div>
        <div className={styles.frame11}>
          <div className={styles.letsDiscoverWrapper}>
            <div className={styles.letsDiscover}>Let’s discover</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
