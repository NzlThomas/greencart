import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} GreenCart. Tous droits réservés. <br />
      Favicon par{" "}
      <a
        href="https://www.flaticon.com/fr/auteurs/seyfdesigner"
        target="_blank"
      >
        SeyfDesigner
      </a>
    </footer>
  );
}

export default Footer;
