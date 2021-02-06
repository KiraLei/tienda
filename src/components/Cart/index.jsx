import { useContext } from "react";
import { Store } from "../../store";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useContext(Store);
  return (
    <div className="container">
      <h1>Producto(s) en el carrito</h1>
      {data.items.map((item) => (
        <ul className="li-minicart">
          <li>
            <img className="small-img" src={item.producto.img} alt="" />
            {item.producto.title}
          </li>
        </ul>
      ))}
      <Link to={"/Checkout"}><button>Finalizar compra</button></Link> 
    </div>
  );
};
export default Cart;
