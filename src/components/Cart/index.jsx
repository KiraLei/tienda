import { useContext } from "react";
import { Store } from "../../store";
import { Link } from "react-router-dom";
import "../Cart/Cart.scss";

const Cart = () => {
  /* eslint-disable no-eval */
  const [data, setData] = useContext(Store);
  return (
    <div className="container carte">
      <div className="align">
        <div>
          <h1>Producto(s) en el carrito</h1>

          {data.items.map((item) => (
            <ul className="ul-birgcart">
              <li>
                <img className="big-img" src={item.producto.img} alt="" />
                <p>{item.producto.title}</p>
              </li>
            </ul>
          ))}
        </div>
        <Link to={"/Checkout"} className="button-align">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};
export default Cart;
