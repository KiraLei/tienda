import './styles/App.css';
import Nav from './components/global/Nav';
import Hero from './components/Home/Hero';
import Footer from './components/global/Footer';
import laundry from './assets/laundry.png';

function App() {
  return (
    <div>
      <Nav/>
   <h1 className= "new">!Soy nueva en este Mundo!</h1>
   <p className ="parrafo" >Aqui sera mi e-commerce wujuuuuu!!!!</p>
   <Hero/>
   <img src={laundry} alt='imagenn'/>
   <Footer/>
   </div>
  );
}

export default App;
