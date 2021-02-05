import { useState, useContext } from "react";
import cart from "../../assets/shopping-cart.svg";
import "../../styles/Nav.scss";
import WidgetCart from "../Home/WidgetCart";
import {Store} from '../../store'

function CartWidget() {
  const [data, setData] = useContext(Store);

  const [showWidgetCart, setShowWidgetCart] = useState(false);

  const openWidgetCart = ()=>{
    setShowWidgetCart(!showWidgetCart);
  }

  
  
  return (
    <>
      <div className="cart" onClick ={openWidgetCart}>
        <img src={cart} alt="cart"/>
        <span>{data.quantity}</span>
      </div>
      <WidgetCart show={showWidgetCart} action={openWidgetCart}  />
    </>
  );
}
export default CartWidget;
