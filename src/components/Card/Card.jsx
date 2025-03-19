import React from 'react'
import "./Card.scss"

function Card({product}) {
  return (
    <div className="card">
          <span className="discount">-{product.discountPercentage}%</span>
          <div className="icons">
            <div className="icon-wrapper">
              {/* <img src={eye} alt="View" /> */}
            </div>
            <div className="icon-wrapper">
              {/* <img src={heart} alt="Wishlist" /> */}
            </div>
          </div>
          <div className="image-container">
            <img src={product.thumbnail} alt={product.title} />
            <div className="overlay"></div>
              <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="info">
            <h3>{product.title}</h3>
            <div className="price">
              <span className="new-price">${product.price}</span>
              <span className="old-price">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
            </div>
            <div className="rating">
              {Array(Math.round(product.rating)).fill("⭐️").map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Card
