import "../../styles/Cards.scss";
import ButtonAdd from '../global/ButtonAdd';
import ProductQuantity from './ProductQuantity';
import { Link } from "react-router-dom";

function Cards({titulo, precio, cantidad, id, imagen}) {

  return (
    
      <div className="card">
        <figure>
          <img src={imagen} alt="producto" />
        </figure>
        <div className="information">
          <p>{titulo}</p>
          <p> Cantidad: {cantidad}</p>
          <p>
            Precio: S/ <span>{precio}</span>
          </p>
          
       <Link to={`/item/${id}`}>detalles</Link>
          <ProductQuantity/>
          <ButtonAdd/>
        </div>
      </div>
  );
}
export default Cards;
