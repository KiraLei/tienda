import product from "../../assets/product.png";
import "../../styles/Cards.scss";
import ButtonAdd from '../global/ButtonAdd';
import ProductQuantity from './ProductQuantity';

function Cards({titulo, precio, cantidad}) {
  return (
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
          
          <p>detalles</p>
          <ProductQuantity/>
          <ButtonAdd/>
        </div>
      </div>
  );
}
export default Cards;
