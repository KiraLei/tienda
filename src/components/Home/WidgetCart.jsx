import "../../styles/Nav.scss";
import { useContext } from "react";
import { Store } from "../../store";
import { Link } from "react-router-dom";

function WidgetCart({ show, action }) {
  const [data, setData] = useContext(Store);
  //console.log(data);

  return (
    <div className={`minicart ${show ? "open" : "close"}`}>
      <div>
        <h2>Carrito</h2>
        <button onClick={action}>X</button>
      </div>

      {data.items.map((item) => (
        
          <ul className="li-minicart">
            <li>
              <img className="small-img" src={item.producto.img} alt="" />
              {item.producto.title}
            </li>
          </ul>
        
      ))}
      <Link to={`/cart`}><button className="btn btn-efect btn-mini">Comprar</button></Link>
    </div>
  );
}
export default WidgetCart;
