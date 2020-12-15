import {useState} from 'react';
import '../../styles/ProductQuantity.scss'
function ProductQuantity(){
   /* const [nombre, setNombre] =  useState('');*/
    const [quantity, setQuantity] =  useState(1);

    return(
        <div className="product-quantity">
            <button className="disable" onClick= {()=>{setQuantity(quantity - 1 )}} disabled={quantity <= 0}>-</button>
            <input type="text" value={quantity} disabled />
            <button onClick={()=>{setQuantity( quantity + 1)}}>+</button>   
        </div>
    )
}

export default ProductQuantity;