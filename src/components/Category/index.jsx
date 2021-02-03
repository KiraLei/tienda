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

    /*
    const {pepito} = useParams();

    useEffect(()=>{
      //  console.log(pepito)
    }, [pepito])*/

    return (
        
        <section className="category">
            <h2>{category_name.split('-').join(' ')}</h2>
            <ListProducts products={prods} />
        </section>
      /*  <p>{pepito}</p>*/
    )
}

export default Category;