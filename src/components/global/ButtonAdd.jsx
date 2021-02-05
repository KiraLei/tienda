import '../../styles/ButtonAdd.scss'
import {Store} from '../../store'
import { useContext } from "react";

function ButtonAdd(){
    const [data, setData] = useContext(Store);

    const onAdd = ()=>{
     //   setData({...data, quantity:});
        //alert(`Agregaste producto(s) al carrito`);
    }

    console.log(data)
    return(
        <div className='button-add' onClick={onAdd}>
            <button >Agregar al carrito</button>
        </div>
    )
}

export default ButtonAdd