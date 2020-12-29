import logo from "../../assets/logoreal1.png";
import "../../styles/Nav.scss";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            <NavLink to="/Us">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contactanos</NavLink>
          </li>
          <CartWidget />
        </ul>
      </nav>
      <div className="line"></div>
    </div>
  );
}
export default Nav;
