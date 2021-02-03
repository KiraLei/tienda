import { useState } from "react";
import cart from "../../assets/shopping-cart.svg";
import "../../styles/Nav.scss";

function WidgetCart({show, action}) {
  
  return (
    <div className={`minicart ${show ? 'open': 'close'}`}>
        <button onClick={action}>X Cerrar</button>
        <br/>
        <br/>
        <br/>
      <p>Todos los productos del carrito :D </p>
      
    </div>
  );
}
export default WidgetCart;
