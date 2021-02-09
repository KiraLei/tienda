import "../../styles/Cards.scss";
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
          
       <Link to={`/item/${id}`}><button className="btn btn-efect">Detalles</button></Link>
         
        </div>
      </div>
  );
}
export default Cards;
