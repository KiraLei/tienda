import React, { useEffect, useState } from "react";
import DetailProduct from "../Product/DetailProduct";
import { products } from "../../products";
import { useParams, Link } from "react-router-dom";
import "../../styles/DetailAndComment.scss";

function ItemDetailContainer({ titulo, precio, cantidad }) {
  const [producto, setProducto] = useState();
  const { itemid } = useParams();

  const promiseProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(products[0]);
      const productClick = products.find((producto) => producto.id == itemid);
      resolve(productClick);
    }, 0);
  });

  const callProduct = () => {
    promiseProduct.then((respuesta) => setProducto(respuesta));
  };

  useEffect(() => callProduct(), []);

  return producto ? (
    <div className="title-detail">
      <h2 className="h2">Detalle del producto</h2>
      <DetailProduct producto={producto} />
    </div>
  ) : (
    <div className="container">
       <section class="containere">
      <p>Este producto no existe</p>
      <Link to={"/"}> Regresar a Home </Link>
      </section>
    </div>
  );
}
export default ItemDetailContainer;
