import {useEffect, useState} from "react";
import product from "../../assets/product.png";
import "../../styles/Cards.scss";
import ButtonAdd from '../global/ButtonAdd';
import ProductQuantity from '../Product/ProductQuantity';

function Cards() {

  const [items, setItems]= useState([]);
  const products =[
    {
      id:1,
      titulo:'Producto 1',
      precio: 500,
    },
    {
      id:1,
      titulo:'Producto 2',
      precio: 250,
    },
    {
      id:1,
      titulo:'Producto 3',
      precio: 800,
    },
    {
      id:1,
      titulo:'Producto 4',
      precio: 400,
    },
  ]

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products);
    },5000)
  })

  

  useEffect(()=>{
    getProducts.then(rta => setItems(rta));
  },[])

  useEffect(()=>{
    items.map(item => console.log(item));
    console.log(items);
  }, [items])


  return (
    <div className="container-cards">
      <div className="card">
        <figure>
          <img src={product} alt="producto" />
        </figure>
        <div className="information">
          <p>Bolsas biodegradables 7.8L</p>
          <p>
            Precio: <span>S/8.54</span>
          </p>
          <p>detalles</p>
          <ProductQuantity/>
          <ButtonAdd/>
        </div>
      </div>
    </div>
  );
}
export default Cards;
