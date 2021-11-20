import React from "react";
import "./styles.css"

function Product({ id, title, image, price, rating }) {
    return(
        <div className="product">
            <div className="product_info">
                <p>{title} </p>
                <p>Gaming accessories</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>price</strong>
                </p>
            </div>
                <img
                    src={image}
                    alt=""
                />

                <button>Add to Basket</button>
        </div>
    );
}

export default Product;