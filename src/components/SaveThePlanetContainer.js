import Group from "./Group";
import styles from "./SaveThePlanetContainer.module.css";

const SaveThePlanetContainer = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <Group
          imageDimensions="/group3.svg"
          groupIconWidth="200rem"
          groupIconHeight="100%"
          groupIconPosition="absollute"
          groupIconTop="0%"
          groupIconRight="-0.66%"
          groupIconBottom="0%"
          groupIconLeft="0.66%"
          groupIconMaxWidth="100%"
          groupIconOverflow="hidden"
          groupIconMaxHeight="100%"
        />
        <div className={styles.frame2}>
          <b className={styles.letsSaveTheContainer}>
            <p className={styles.letsSave}>Let’s save</p>
            <p className={styles.letsSave}>THE PLANET</p>
          </b>
        </div>
        <div className={styles.frame3}>
          <b className={styles.home}>Home</b>
        </div>
        <div className={styles.frame4}>
          <div className={styles.home}>About us</div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.home}>Contact</div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.home}>Article</div>
        </div>
        <div className={styles.frame7}>
          <div className={styles.viewMoreWrapper}>
            <div className={styles.viewMore}>View more</div>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et tempor felis. Nunc vel ipsum a diam lacinia convallis. Sed vel
            lacus eu velit tincidunt blandit. Nunc velit nisl, lobortis aliquet
            egestas at, porttitor vitae neque. Quisque dictum libero at rhoncus
            lacinia. In ac neque nibh. Nullam nec ex id metus euismod
            scelerisque. Aliquam lobortis nibh efficitur volutpat varius.
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame1.svg" />
        <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
        <div className={styles.frame9}>
          <img className={styles.icon} alt="" src="/7170074-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default SaveThePlanetContainer;
