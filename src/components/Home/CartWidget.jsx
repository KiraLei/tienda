import { useState } from "react";
import cart from "../../assets/shopping-cart.svg";
import "../../styles/Nav.scss";
import WidgetCart from "../Home/WidgetCart";

function CartWidget() {
  const [showWidgetCart, setShowWidgetCart] = useState(false);

  const openWidgetCart = ()=>{
    setShowWidgetCart(!showWidgetCart);
  }
  return (
    <>
      <div className="cart" onClick ={openWidgetCart}>
        <img src={cart} alt="cart"/>
        <span>1</span>
      </div>
      <WidgetCart show={showWidgetCart} action={openWidgetCart} />
    </>
  );
}
export default CartWidget;
