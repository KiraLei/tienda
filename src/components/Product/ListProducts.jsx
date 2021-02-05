import { useEffect, useState } from "react";
import "../../styles/Cards.scss";
import ButtonAdd from "../global/ButtonAdd";
import ProductQuantity from "../Product/ProductQuantity";
import Cards from "./CardProduct";
import { products } from "../../products";
import { useParams } from "react-router-dom";

function ListProducts() {
  const [items, setItems] = useState([]);
  const { categoryid } = useParams();
  // console.log(categoryid);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  });
  const callProduct = () => {
    getProducts.then((rta) => {
      if (categoryid) {
        const productCategory = rta.filter(
          (producto) => producto.category === categoryid
        );

        setItems(productCategory);
      } else {
        const productRelevant = rta.filter(
          (producto) => producto.outstanding === true
        );
        setItems(productRelevant);
      }
    });
  };

  useEffect(() => callProduct(), [categoryid]);

  /*
  useEffect(() => {
    getProducts.then((rta) => setItems(rta));
  }, [items]);*/
  /*  <h2>{categoryid.split('-').join('')}</h2> */

  return (
    <div className="container cards">
      {items.length ? (
        <>
          {items.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              imagen={item.img}
              titulo={item.title}
              precio={item.price}
              cantidad={item.quantity}
              producto={items}
            ></Cards>
          ))}
        </>
      ) : (
        <p>Cargando items...</p>
      )}
    </div>
  );
}
export default ListProducts;
