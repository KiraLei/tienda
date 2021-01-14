import {useEffect, useState} from "react";
import product from "../../assets/product.png";
import "../../styles/Cards.scss";
import ButtonAdd from '../global/ButtonAdd';
import ProductQuantity from '../Product/ProductQuantity';
import Cards from './CardProduct';

function ListProducts() {

  const [items, setItems]= useState([]);
  const products =[
    {
      id:1,
      titulo:'Bolsas biodegradables 7.8L',
      precio: 55.00,
      cantidad: 50,
    },
    {
      id:2,
      titulo:'Bolsas biodegradables 8L',
      precio: 250,
      cantidad: 250,
    },
    {
      id:3,
      titulo:'Bolsas biodegradables 6L',
      precio: 800,
      cantidad: 70,
    },
    {
      id:4,
      titulo:'Bolsas biodegradables 4L',
      precio: 400,
      cantidad: 90,
    },
    {
        id:5,
        titulo:'Bolsas biodegradables 7.8L',
        precio: 500,
        cantidad: 10,
      },
      {
        id:6,
        titulo:'Producto 2',
        precio: 250,
        cantidad: 25,
      },
      {
        id:7,
        titulo:'Producto 3',
        precio: 800,
        cantidad: 35,
      },
      {
        id:8,
        titulo:'Producto 4',
        precio: 400,
        cantidad: 100,
      },
  ]

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products);
    },0)
  })

  

  useEffect(()=>{
    getProducts.then(rta => setItems(rta));
  },[])

  useEffect(()=>{
    items.map(item => console.log(item));
    console.log(items);
  }, [items])


  return (
    <div className="container cards">
        {items.length ?
        <>
          {
            items.map(item => 
            <Cards key={item.id} 
            titulo= {item.titulo} 
            precio= {item.precio} 
            cantidad={item.cantidad}
            ></Cards>)
        }</>:
        <p>Cargando items...</p>
    
    }
      
      
      



    </div>
  );
}
export default ListProducts;