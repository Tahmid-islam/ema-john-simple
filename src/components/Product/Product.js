import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  const { name, img, seller, price, stock, star } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fa fa-star icon-color"
          readonly
        ></Rating>
        <br />
        <button
          className="btn-regular"
          onClick={() => handleAddToCart(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
