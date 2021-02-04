import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Home/Nav";
import Footer from "./components/Home/Footer";
import ListProducts from "./components/Product/ListProducts";
import ItemDetailContainer from "../src/components/Product/ItemDetailContainer";
import Error404 from "../src/components/global/Error404/";
import Us from "./components/Us/index";
import Contact from "./components/Contact/index";
import { Store } from "../src/store";
import Category from "./components/Category/index";

function App() {
  /* <Route exact path="/category/:name?">
            <Category/>
          </Route>*/


  return (
    <Store.Provider >
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ListProducts />
          </Route>
          <Route path="/item/:itemid?">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Us">
            <Us />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>       
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
