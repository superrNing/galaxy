import Link from "next/link";
import styles from "./header.module.css";

const HeaderLink = (allprops) => {
  // console.log("allprops", allprops);
  return (
    <>
      <Link
        className={`${styles[allprops?.className]} ${styles.headerLink}`}
        href={allprops?.herf}
      >
        {allprops?.text}
      </Link>
      {allprops.last ? "" : "|"}
    </>
  );
};

export default HeaderLink;
