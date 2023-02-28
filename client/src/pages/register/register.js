import React,{useState}from 'react';
import {Link } from 'react-router-dom';
import headerimg from '../../images/headerbg.jpg'
import axios from "axios";

const Register = () => {
const [username, setusername] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, seterror] = useState(false);
  
const handlesubmit=async(e)=>{
  e.preventDefault();
  seterror(false)
  try {
    const res= await axios.post("/auth/register",{
      username,
      email,
      password,
    })
    res.data && window.location.replace('/login')
  } catch (error) {
    seterror(true)
  }
}


    return (
        <div className='main-conatiner'>

        
        <div class="container">
          <input type="checkbox" id="flip"/>
          <div class="cover">
            <div class="front">
              <img src={headerimg}  alt=""/>
              <div class="text">
                <span class="text-1">Every new friend is a <br></br> new adventure</span>
                <span class="text-2">Let's get connected</span>
              </div>
            </div>
            <div class="back">
              <img class="backImg" src="images/backImg.jpg" alt=""/>
              <div class="text">
                <span class="text-1">Complete miles of journey <br/> with one step</span>
                <span class="text-2">Let's get started</span>
              </div>
            </div>
          </div>
          <div class="forms">
              <div class="form-content">
                
              <div class="signup-form">
                <div class="title">Signup</div>
              <form onSubmit={handlesubmit}>
                  <div class="input-boxes">
                    <div class="input-box">
                      <i class="fas fa-user"></i>
                      <input type="text" 
                      placeholder="Enter your name" 
                      className='textinput'
                      onChange={e=>setusername(e.target.value)}
                      required/>
                    </div>
                    <div class="input-box">
                      <i class="fas fa-envelope"></i>
                      <input type="text" 
                      placeholder="Enter your email" 
                      className='textinput'
                      onChange={e=>setemail(e.target.value)}
                      required/>
                    </div>
                    <div class="input-box">
                      <i class="fas fa-lock"></i>
                      <input type="password" 
                      placeholder="Enter your password" 
                      className='textinput'
                      onChange={e=>setpassword(e.target.value)}
                      required/>
                    </div>
                    <div class="button input-box">
                      <button type="submit" className='textinput' value="Sumbit">Signup</button>
                    </div>
                    <div class="text sign-up-text">Already have an account? <Link to='/login'> <label for="flip">Login now</label></Link></div>
                  </div>
                  <div className='error-message'>
                    {error && (
                    <h1 style={{margin:'20px 70px',color:'crimson'}}>something went wrong ! </h1>
                    )}
                  </div>
            </form>
          </div>
          </div>
          </div>
        </div>
      
      </div>
    );
}

export default Register;
