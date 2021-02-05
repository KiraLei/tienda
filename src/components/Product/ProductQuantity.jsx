import { useState } from "react";
import "../../styles/ProductQuantity.scss";
function ProductQuantity() {
  /* const [nombre, setNombre] =  useState('');*/
  const [quantity, setQuantity] = useState(1);
  const onAdd = ()=>{
    //   setData({...data, quantity:});
       alert(`Agregaste producto(s) al carrito`);
   }

  return (
    <>
      <div className="product-quantity">
        <button
          className="disable"
          onClick={() => {
            setQuantity(quantity - 1);
          }}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input type="text" value={quantity} disabled />
        <button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="button-add" onClick={onAdd}>
        <button>Agregar al carrito</button>
      </div>
    </>
  );
}

export default ProductQuantity;
