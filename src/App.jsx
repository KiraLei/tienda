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
import { useState } from "react";


function App() {
  const [data, setData] = useState({
    items: [],
    quantity: 0,
  });

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ListProducts />
          </Route>
          <Route exact path="/category/:categoryid?">
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
