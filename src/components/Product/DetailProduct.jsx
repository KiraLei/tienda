import product from "../../assets/product.png";
import "../../styles/Cards.scss";
import ButtonAdd from '../global/ButtonAdd';
import ProductQuantity from './ProductQuantity';

function DetailProduct({titulo, precio, cantidad}) {
  return (
      <>
      <p>Detalle del producto</p>
      <div className="card">
        <figure>
          <img src={product} alt="producto" />
        </figure>
        <div className="information">
          <p>{titulo}</p>
          <p> Cantidad: {cantidad} unid.</p>
          <p>
            Precio: S/ <span>{precio}</span>
          </p>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat natus ipsam dolores quod illum expedita inventore. Quis, cumque vero qui quod earum esse doloremque repellat sit provident at impedit.</p>
          <ProductQuantity/>
          <ButtonAdd/>
        </div>
      </div>
      </>
  );
}
export default DetailProduct;