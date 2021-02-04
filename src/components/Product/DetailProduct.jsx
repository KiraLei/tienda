import product from "../../assets/product.png";
import "../../styles/DetailProduct.scss";
import ButtonAdd from "../global/ButtonAdd";
import ProductQuantity from "./ProductQuantity";

function DetailProduct({ producto }) {
  return (
    <>
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
          <p>
            {producto.description}
          </p>
          <h4>Features</h4>
          <p>
            Material: {producto.material} <br />
            Color: {producto.color} <br />
            Size: {producto.size}
          </p>
        </div>
      </div>
    </>
  );
}
export default DetailProduct;
