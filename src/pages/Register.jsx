import React, {useState} from 'react';
import "./Register.scss";
import kortel from "../assets/image/kortel.png";
import google from "../assets/svg/google.svg"
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  toast } from 'react-toastify';

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function createUser() {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            console.log(res);
            if(res) {
                toast.success("user seuccess created")
            }
            
        } catch (error) {
            console.log(error);         
            toast.error(error.message)   
        }
    }

  return (
    <div className='SignUp'>
      <img src={kortel} alt="Phone illustration" className="phone-image" />
      <div className='left'>
        <div className='form-container'>
          <h3>Create an account</h3>
          <p>Enter your details to get started.</p>
          <div>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name"  />
            </div>
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" required />
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" required />
            </div>
            <button onClick={createUser} type="submit" className='signup-button'>Create Account</button>
            <div className='btn'>
            <button>
              <img src={google} alt="" />
              Sign up with Google</button>
            </div>
          </div>
          <p className='login-link'>
            Already have an account? 
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;