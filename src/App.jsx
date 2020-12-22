import './styles/App.css';
import Nav from './components/Home/Nav';
import Hero from './components/Home/Hero';
import Footer from './components/Home/Footer';
import ListProducts from './components/Product/ListProducts';

function App() {
  return (
    <div className='principal'>
      <Nav/>
      <ListProducts/>
   <Footer/>
   </div>
  );
}

export default App;
