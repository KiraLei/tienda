import "../../styles/DetailProduct.scss";
import ProductQuantity from "./ProductQuantity";
import Comments from "../Product/Comments";


function DetailProduct({ producto }) {
  return (
    <>
      <div className="cont">
        <figure className="img">
          <img src={`${producto.img}`} alt="imagen producto" />
        </figure>
        <div className="information">
          <h3>{producto.title}</h3>
          <p>
            Precio: S/<span>{producto.price}</span>
          </p>
          <ProductQuantity producto={producto} />
          <h4>Description</h4>
          <p>{producto.description}</p>
          <h4>Features</h4>
          <p>
            Material: {producto.material} <br />
            Color: {producto.color} <br />
            Size: {producto.size}
          </p>
        </div>
      </div>
      <Comments />
    </>
  );
}
export default DetailProduct;
