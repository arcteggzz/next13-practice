import styles from "./Footer.module.scss";

const Footer = () => {
  const getYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return `© ${currentYear} Oghenetega Esedere. All rights reserved.`;
  };

  return (
    <>
      <footer className={styles.Footer}>
        <p>{getYear()}</p>
      </footer>
    </>
  );
};

export default Footer;
