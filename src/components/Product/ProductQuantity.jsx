import '../../styles/ProductQuantity.scss'
function ProductQuantity(){

    return(
        <div className="product-quantity">
            <button>-</button>
            <input type="text" value="1" />
            <button>+</button>
        </div>
    )
}

export default ProductQuantity;