import { useEffect, useState } from "react";
import product from "../../assets/product.png";
import "../../styles/Cards.scss";
import ButtonAdd from "../global/ButtonAdd";
import ProductQuantity from "../Product/ProductQuantity";
import Cards from "./CardProduct";
import { products } from "../../products";

function ListProducts() {
  const [items, setItems] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  });

  useEffect(() => {
    getProducts.then((rta) => setItems(rta));
  }, [items]);

  /*
  useEffect(() => {
   // items.map((item) => console.log(item));
    //console.log(items);
  }, [items]); */

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
