import Styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <h1>Zen O</h1>
      <p>Concept Smart Ring by Iman Irvansyah</p>
      <div className={Styles.footer_links}>
        <a href="">See on Github</a>
        <a href="">Say Hi on LinkedIn</a>
        <a href="">More Projects </a>
      </div>
    </footer>
  )
}