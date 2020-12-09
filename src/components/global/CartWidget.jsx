import cart from '../../assets/shopping-cart.svg';
import '../../styles/Nav.scss';

function CartWidget(){
    return(
        <div className='cart'> 
            <img src={cart} alt="cart"/>
            <span>1</span>
         
        </div>
    )
}
export default CartWidget;