import "../Contact/Contact.scss";
import contact from "../../assets/contact.svg";
const Contact = () => {
  return (
    <div className="container ">
      <section className="containere about-us">
        <h2 className="title">Contactanos </h2>
        <div className="container-about-us">
          <img src={contact} alt='imagen' className="image-about-us" />
          <div className="content-texts">
            <h3>
              <span>1</span> Numeros Telefonicos
            </h3>
            <p>
              (+ 051) 968- 968 -695
            </p>
            <p>
              (+ 051) 900- 500 -656
            </p>
            <p>
              (+ 051) 922- 333 -878
            </p>
            <h3>
              <span>2</span>Nos encontramos en
            </h3>
            <p>
              Av. 6 de agosto 758
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
