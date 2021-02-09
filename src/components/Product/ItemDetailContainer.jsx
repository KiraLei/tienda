import React, { useEffect, useState } from "react";
import DetailProduct from "../Product/DetailProduct";
import { products } from "../../products";
import { useParams, Link } from "react-router-dom";
import "../../styles/DetailAndComment.scss";
import { getFirestore } from "../../db";
import error from "../../assets/sad.svg";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const db = getFirestore();

  useEffect(() => {
    // console.log(itemid);
    db.collection("productos")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setProducto(doc.data());
          console.log(doc.data());
          //console.log('holaaa');
        }
      })
      .catch((e) => console.log(e));
  }, []);

  /*
  const promiseProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(products[0]);
      const productClick = products.find((producto) => producto.id == itemid);
      resolve(productClick);
    }, 0);
  });*/

  /*
  const callProduct = () => {
    promiseProduct.then((respuesta) => setProducto(respuesta));
  };

  useEffect(() => callProduct(), []);*/

  return (
    <>
      {producto ? (
        <div className="title-detail">
          <ol className="breadcrum">
            <li>
              <Link to={`/category/${producto.category}`}>
                {producto.category.split("-").join(" ")}
              </Link>
            </li>
            <li>{">"}</li>
            <li>{producto.title}</li>
          </ol>
          <h2 className="h2">Detalle del producto</h2>
          <DetailProduct producto={producto} />
        </div>
      ) : (
        <div className="container detail-container">
          <section className="containere">
            <div>
              <p>Este producto no existe</p>
              <Link to={"/"}> Regresar a la página principal </Link>
            </div>
            <img className="error" src={error} alt="error404" />
          </section>
        </div>
      )}
    </>
  );
}
export default ItemDetailContainer;
