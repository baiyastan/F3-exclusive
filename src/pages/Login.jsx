import React from 'react';
import "./LogIn.scss";
import kortel from "../assets/image/kortel.png";
import { Link } from 'react-router-dom';
function LogIn() {
  return (
    <div className='LogIn'>
      <img src={kortel} alt="Phone illustration" className="phone-image" />
      <div className='right'>
        <div className='form-container'>
          <h3>Log in</h3>
          <p>Welcome back! Please enter your details.</p>
          <form>
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className='flex'>
            <button type="submit" className='login-button'>Log in</button>
          <p className='forgot-password'>
            <Link to="/forgot-password" >Forgot password?</Link>
          </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;