import React ,{ useEffect, useState } from "react";
import  DetailProduct  from "../Product/DetailProduct";
import { products} from "../../products";
import { useParams } from "react-router-dom";

function ItemDetailContainer({titulo, precio, cantidad}) {
  const [producto, setProducto] = useState();
  const {itemid} = useParams();

  const promiseProduct = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //resolve(products[0]);
      const productClick = products.find(producto=> producto.id == itemid)
      resolve(productClick);
    },500);
  });

const callProduct= () =>{
  promiseProduct.then((respuesta)=>setProducto(respuesta));
}

useEffect(()=> callProduct(), []);


  return producto ? (
      <div className="itemDetailContainer">
        <h2>Detalle del producto</h2>
          <DetailProduct producto={producto}/>
      
      </div>
  ): (
    "cargando..."
  );
}
export default ItemDetailContainer;
