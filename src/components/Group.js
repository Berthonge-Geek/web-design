import { useMemo } from "react";
import styles from "./Group.module.css";

const Group = ({
  imageDimensions,
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
  const groupIcon1Style = useMemo(() => {
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
      src={imageDimensions}
      style={groupIcon1Style}
    />
  );
};

export default Group;
