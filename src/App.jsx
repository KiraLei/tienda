import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Home/Nav";
import Hero from "./components/Home/Hero";
import Footer from "./components/Home/Footer";
import ListProducts from "./components/Product/ListProducts";
import ItemDetailContainer from "../src/components/Product/ItemDetailContainer";
import Error404 from "../src/components/global/Error404/";
import Us from "./components/Us/index";
import Contact from "./components/Contact/index";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <ListProducts />
        </Route>
        <Route exact path="/Us">
          <Us/>
        </Route>
        <Route exact path="/Contact">
          <Contact/>
        </Route>
        <Route path="/detail">
          <ItemDetailContainer/>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
