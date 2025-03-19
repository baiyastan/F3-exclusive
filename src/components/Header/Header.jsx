import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import search from "../../assets/svg/search.svg"
import wishlist from "../../assets/svg/wishlist.svg"
import cart from "../../assets/svg/cart.svg"

function Header() {
    return (
        <header className='header'>
            <div className='header-top'>
                <div className='header-select container'>
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <Link>ShopNow</Link>
                    </p>
                    <select>
                        <option value="kg">KGZ</option>
                        <option value="en">ENG</option>
                        <option value="ru">RUS</option>
                    </select>
                </div>
            </div>
            <div className='header-main'>
                <div className='header-left'>
                    <Link>Exclusive</Link>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link to="/register">Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className='header-right'>
                    <div className='search'>
                        <input type="text" />
                        <img src={search} alt="" />
                    </div>
                    <div className='icons'>
                        <img src={wishlist} alt="" />
                        <img src={cart} alt="" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
