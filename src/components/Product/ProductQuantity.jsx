import { useState, useContext } from "react";
import "../../styles/ProductQuantity.scss";
import "../../styles/ButtonAdd.scss";
import { Store } from "../../store";
import { useHistory } from "react-router-dom";

function ProductQuantity(producto) {
  const history = useHistory();
  /* const [nombre, setNombre] =  useState('');*/
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useContext(Store);

  const onAdd = () => {
    // alert(`Agregaste producto(s) al carrito`);
    setData({
      ...data,
      quantity: data.quantity + quantity,
      items:[...data.items, producto ],
    });
    history.push('/cart')
  };

  //console.log(data);
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
