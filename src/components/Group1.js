import { useMemo } from "react";
import styles from "./Group1.module.css";

const Group1 = ({
  imageResolution,
  groupIconWidth,
  groupIconHeight,
  groupIconPosition,
  groupIconTop,
  groupIconRight,
  groupIconBottom,
  groupIconLeft,
  groupIconMaxWidth,
  groupIconOverflow,
  groupIconMaxHeight,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
      position: groupIconPosition,
      top: groupIconTop,
      right: groupIconRight,
      bottom: groupIconBottom,
      left: groupIconLeft,
      maxWidth: groupIconMaxWidth,
      overflow: groupIconOverflow,
      maxHeight: groupIconMaxHeight,
    };
  }, [
    groupIconWidth,
    groupIconHeight,
    groupIconPosition,
    groupIconTop,
    groupIconRight,
    groupIconBottom,
    groupIconLeft,
    groupIconMaxWidth,
    groupIconOverflow,
    groupIconMaxHeight,
  ]);

  return (
    <img
      className={styles.groupIcon}
      alt=""
      src={imageResolution}
      style={groupIconStyle}
    />
  );
};

export default Group1;
