import { useContext, useState } from "react";
import { Store } from "../../store";
import "../Checkout/Checkout.scss";
import { getFirebase, getFirestore } from "../../db";
import firebase from "firebase/app";
import thanks from "../../assets/thanks.svg";

const Checkout = () => {
  const db = getFirestore();
  const app = getFirebase();
  const [venta, completoVenta] = useState(false);
  const [data, setData] = useContext(Store);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tel: "",
  });
  const [idCompra, setIdCompra] = useState("");

  const handleChangeInput = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const purchase = {
    user: formData,
    items: data.items,
    // totalPrice: data.precioTotal
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    db.collection("ventas")
      .add(purchase)
      .then(({ id }) => {
        completoVenta(true);
        setIdCompra(id);
        // console.log(id);
      })
      .catch((e) => console.log(e));
  };

  //console.log(firebase.firestore.Timestamp.fromDate(new Date()));

  //console.log(data);
  return (
    <div className="container checkout">
      {!venta ? (
        <>
          <h1>A pagar</h1>
          <form className="form" onSubmit={handleSubmitForm}>
            <input
              type="text"
              value={formData.nopmbre}
              onChange={handleChangeInput}
              name="nombre"
              placeholder="Nombre"
            />
            <input
              type="text"
              value={formData.apellido}
              onChange={handleChangeInput}
              name="apellido"
              placeholder="Apellido"
            />
            <input
              type="text"
              value={formData.email}
              onChange={handleChangeInput}
              name="email"
              placeholder="E-mail"
            />
            <input
              type="text"
              value={formData.tel}
              onChange={handleChangeInput}
              name="tel"
              placeholder="Teléfono"
            />
            <button>Pagar</button>
          </form>
        </>
      ) : (
        <div className="sucess">
          <h1>Gracias!!!</h1>
          <div className="purchase">
            <img src={thanks} alt="imagen" className="image-about-us" />
            <div>
              <p>Tu compra fue realizada correctamente</p>
              <p>Tu codigo de seguimiento es {idCompra}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Checkout;
