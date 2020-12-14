import './styles/App.css';
import Nav from './components/Home/Nav';
import Hero from './components/Home/Hero';
import Footer from './components/Home/Footer';
import Cards from './components/Product/Cards';

function App() {
  return (
    <div className='principal'>
      <Nav/>
      <Cards/>
   <Footer/>
   </div>
  );
}

export default App;
