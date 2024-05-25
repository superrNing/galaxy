import styles from "./contentGrid.module.css";
import Link from "next/link";

const Grid = ({ title, desc, herf, imgSrc, alt }) => {
  return (
    <div className={styles.Grid}>
      <Link href={herf}>
        <h3 className={styles.gridTitle}>{title}</h3>
        <img className={styles.gridImg} src={imgSrc} alt={alt} />
      </Link>
      <p className={styles.gridDesc}>
        {desc.length > 330 ? desc.substring(0, 330) + "..." : desc}
      </p>
    </div>
  );
};

export default Grid;
