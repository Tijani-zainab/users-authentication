import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerTop}>
        <div>
          <div className={styles.altSchool}>
            <p>Alt School</p>
            <p>
              A software Engineering School-   Acquire in-demand tech skills
              without hassle
            </p>
          </div>
          <div className={styles.socials}>
            <span>f</span>
            <span>T</span>
            <span>I</span>
            <span>L</span>
          </div>
        </div>
        <div className={styles.footerContactUs}>
          <div>Contact Us</div>
          <span>Phone : 09123457998</span>
          <span>Email : altschool@gmail.com</span>
        </div>
        <div className={styles.footerFindUs}>
          <div>Find Us</div>
          <span>Shaker Family Center - 2nd Floor</span>
          <span>1982 Sussex RoadShaker Heights</span>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>
          ENG <span>{">"}</span>
        </div>
        <div className={styles.terms}>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
};
export default Footer;
// Projects
// Contact
// Footer
