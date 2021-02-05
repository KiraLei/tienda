import "../../styles/DetailProduct.scss";
import ButtonAdd from "../global/ButtonAdd";
import ProductQuantity from "./ProductQuantity";
import Comments from "../Product/Comments";
import { Link } from "react-router-dom";

function DetailProduct({ producto }) {
  return (
    <>
    <div>
      <ol>
        <li>
          <Link to={`/${producto.category}`}>{producto.category.split('-').join(' ')}</Link>
        </li>
      </ol>
    </div>
      <div className="cont">
        <figure>
          <img src={`${producto.img}`} alt="imagen producto" />
        </figure>
        <div className="information">
          <h3>{producto.title}</h3>
          <p>
            Precio: S/<span>{producto.price}</span>
          </p>
          <ProductQuantity />
          <ButtonAdd />
          <h4>Description</h4>
          <p>{producto.description}</p>
          <h4>Features</h4>
          <p>
            Material: {producto.material} <br />
            Color: {producto.color} <br />
            Size: {producto.size}
          </p>
        </div>
        <div className="line-division"/>
      </div>
      <Comments />
    </>
  );
}
export default DetailProduct;
