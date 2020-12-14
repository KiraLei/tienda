import logo from "../../assets/logoreal1.png";
import "../../styles/Nav.scss";
import CartWidget from "./CartWidget";

function Nav() {
  return (
    <div className="navbar">
      <nav>
          <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Ventas al por mayor</a>
          </li>
          <li>
            <a href="#">Contactanos</a>
          </li>
          <CartWidget />
        </ul>
      </nav>
      <div className="line"></div>
    </div>
  );
}
export default Nav;