import {useState, useEffect} from 'react';
import {products} from '../../products'
import {useParams} from 'react-router-dom';
import ListProducts from "../Product/ListProducts";

const Category = () => {
    
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(category_name) {
            setProds(products.filter(prod => prod.category === category_name))
        }
    }, [category_name]) 

    /*<h2>{category_name.split('-').join(' ')}</h2>*/

    return (   
        <section className="container cards">
           
           Holaaaaa
           <ListProducts products={prods}></ListProducts>
        </section>
    )
}

export default Category;