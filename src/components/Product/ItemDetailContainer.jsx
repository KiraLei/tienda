import  DetailProduct  from "../Product/DetailProduct";

function ItemDetailContainer({titulo, precio, cantidad}) {
  return (
      <div className="itemDetailContainer">
        <h2>Detalle del producto</h2>
          <DetailProduct/>
      
      </div>
  );
}
export default ItemDetailContainer;
