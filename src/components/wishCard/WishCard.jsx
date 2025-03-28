import React from 'react'
import "./List.scss"
import deleteImg from "../../assets/svg/delete.svg"

function WishCard() {
  return (
    <div className="card">
          <span className="discount">56</span>
          <div className="icons">
            <div className="icon-wrapper">
              <img src={deleteImg} alt="View" />
            </div>
          </div>
          <div className="image-container">
            <img src="" alt="" />
            <div className="overlay"></div>
              <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="info">
            <h3>title</h3>
            <div className="price">
              <span className="new-price">$45</span>
              <span className="old-price">
              67
              </span>
            </div>
            
          </div>
        </div>
  )
}

export default WishCard
