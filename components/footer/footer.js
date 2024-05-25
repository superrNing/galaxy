// import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer} id="footer-container">
        <div className={styles.authorContainer}>
          <p className={styles.authorName}>Ning Lu</p>
          <a
            className={styles.authorEmail}
            herf="mailto:lu000194@algonquinlive.com"
          >
            lu000194@algonquinlive.com
          </a>
        </div>
        <div className={styles.ulContainer}>
          <ul>
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Travel guides</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-tiktok-line"></i>
            <i className="ri-youtube-line"></i>
            <i className="ri-linkedin-line"></i>
            <i className="ri-github-fill"></i>
            <i className="ri-facebook-circle-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
