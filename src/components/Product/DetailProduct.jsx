import product from "../../assets/product.png";
import "../../styles/DetailProduct.scss";
import ButtonAdd from "../global/ButtonAdd";
import ProductQuantity from "./ProductQuantity";

function DetailProduct({ titulo, precio, cantidad }) {
  return (
    <>
      <div className="cont">
        <figure>
          <img src={product} alt="producto" />
        </figure>
        <div className="information">
          <h3>Bolsa de 6L</h3>
          <p>
            Precio: S/ 25.00<span>{precio}</span>
          </p>
          <ProductQuantity />
          <ButtonAdd />
          <h4>Description</h4>
          <p>
            ☺ Biodegradable non-woven nursery bags plant grow bags fabric pots
            plants pouch home garden supply. <br />
            ☺ Eco-friendly breathable and biodegradable non-woven material, no
            need to remove the bag when transplanting, improving the plants
            survival rate. <br />
            ☺ Excellent water absorption and permeability, nutrient and moisture
            can be absorbed easily. <br />
            ☺ High survival rate, fast growth, ensure the plant grow well.
            Prevent the seedling from forming entangling roots and decaying
            roots. <br />☺ Multi purpose. Non-woven seedling bags can be
            suitable for a variety of planting needs, they are perfect for
            flowers, vegetables, saplings, covering your garden.
          </p>
          <h4>Features</h4>
          <p>
            Material: nonwoven <br />
            Color: please check the picture <br />
            Size: please allow tiny size deviations due to human measurement
          </p>
        </div>
      </div>
    </>
  );
}
export default DetailProduct;
