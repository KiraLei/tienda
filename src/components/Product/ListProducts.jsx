import { useEffect, useState } from "react";
import "../../styles/Cards.scss";
import Cards from "./CardProduct";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../db";
import spiner from "../../assets/logoreal1.png";

function ListProducts() {
  const [items, setItems] = useState([]);
  const { categoryid } = useParams();
  const db = getFirestore();
  // console.log(categoryid);

  const getProducts = () => {
    if(categoryid){
      db.collection("productos").where("category", "==", categoryid)
      .get()
      .then((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          arr.push({ id: doc.id, data: doc.data() });
          
          //console.log(doc.data());
        });
        console.log(arr);
        setItems(arr);
      })
      .catch((e) => console.log(e));

    }else{
      db.collection("productos").where("outstanding", "==", true)
      .get()
      .then((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          arr.push({ id: doc.id, data: doc.data() });
          
          //console.log(doc.data());
        });
        //console.log(arr);
        setItems(arr);
      })
      .catch((e) => console.log(e));

    }

  };

  
/*
  const getProducts = () => {
    db.collection("productos").where("outstanding", "==", false)
      .get()
      .then((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          arr.push({ id: doc.id, data: doc.data() });
          
          //console.log(doc.data());
        });
        console.log(arr);
        setItems(arr);
      })
      .catch((e) => console.log(e));
  };*/

  /*
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 0);
  }); */
  /*

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
  };*/

  /*useEffect(() => callProduct(), [categoryid]);*/
  useEffect(() => {
    getProducts();
  }, [categoryid]);

  return (
    <div className="container cards">
      {items.length ? (
        <>
        
          {items.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              imagen={item.data.img}
              titulo={item.data.title}
              precio={item.data.price}
              cantidad={item.data.quantity}
              producto={items}
            ></Cards>
          ))}
        </>
      ) : (
        <div className="div-spiner">
          <img className="spiner" src={spiner} alt="spiner" />
          <p>Cargando...</p>
        </div>
      )}
    </div>
  );
}
export default ListProducts;
