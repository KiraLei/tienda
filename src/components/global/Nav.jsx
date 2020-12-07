import logo from '../../assets/logo.png';
import '../../styles/Nav.scss';

function Nav(){
    return(
        <div className='navbar'>
        <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Ventas al por mayor</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <div className='line'></div>
        </div>
    )
}
export default Nav;