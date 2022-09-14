import FooterStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <p>@Fredrika Carlsén 2022</p>
      <p>Inlämningsuppgift 2, JavaScript 3</p>
      <p>React, React Router, hooks, API, CSS components etc</p>
    </footer>
  )
}

export default Footer;