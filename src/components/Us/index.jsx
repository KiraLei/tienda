import "../Us/Us.scss";
import eco from "../../assets/eco111.svg";
const Us = () => {
  return (
    <div className="container">
      <section className="containere about-us">
        <h2 className="title">Nosotros </h2>
        <div className="container-about-us">
          <img src={eco} alt='imagen' className="image-about-us" />
          <div className="content-texts">
            <h3>
              <span>1</span>Los mejores productos
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure
              et architecto itaque minima distinctio repellat dolor?
              Necessitatibus veniam rem eius soluta. Obcaecati distinctio minima
              aut saepe, delectus fugiat modi.
            </p>
            <h3>
              <span>2</span>Los mejores productos
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure
              et architecto itaque minima distinctio repellat dolor?
              Necessitatibus veniam rem eius soluta. Obcaecati distinctio minima
              aut saepe, delectus fugiat modi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Us;
