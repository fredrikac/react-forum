import HeaderStyles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {


  return (
    <header>
      <Link style={{textDecoration: 'none'}} to="/"><h1 className={HeaderStyles.headerText}>React Forum</h1></Link></header>
  )
}

export default Header;