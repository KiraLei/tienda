import logo from "../../assets/logoreal1.png";
import "../../styles/Nav.scss";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  const menuLinks = [
    {
      text: "Bolsas",
      ruta: "/category/bolsas",
    },
    {
      text: "Aceites",
      ruta: "/category/aceites",
    },
    {
      text: "Aseo Personal",
      ruta: "/category/aseo-personal",
    },
    {
      text: "Contactanos",
      ruta: "/Contact",
    },
    {
      text: "Nosotros",
      ruta: "/Us",
    },
  ];
  /* <li>
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
          </li>*/

  return (
    <div className="navbar">
      <nav>
        <Link to={"/"}> <img className="logo" src={logo} alt="logo" /> </Link>
        <ul>
          {menuLinks.map((seccion, index) => (
            <li>
              <NavLink key={index} to={seccion.ruta}>{seccion.text}</NavLink>
            </li>
          ))}

          <CartWidget />
        </ul>
      </nav>
      <div className="line"></div>
    </div>
  );
}
export default Nav;
