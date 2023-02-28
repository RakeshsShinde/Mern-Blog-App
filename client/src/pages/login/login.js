import React, { useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import headerimg from '../../images/headerbg.jpg'
import { Context } from '../../context/Context';
import axios from 'axios';
const Login = () => {
  const { dispatch, isFetching } = useContext(Context)
  const userRef = useRef();
  const passwordRef = useRef();

  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" })
    }
  }



  return (
    <div className='main-conatiner'>


      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={headerimg} alt="" />
            <div className="text">
              <span className="text-1">Every new friend is a <br></br> new adventure</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src="images/backImg.jpg" alt="" />
            <div className="text">
              <span className="text-1">Complete miles of journey <br /> with one step</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handlesubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text"
                      className='textinput'
                      placeholder="Enter your username"
                      ref={userRef}
                      required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password"
                      className='textinput'
                      placeholder="Enter your password"
                      ref={passwordRef}
                      required />
                  </div>
                  <div className="text"><p>Forgot password?</p></div>
                  <div className="button input-box " disabled={isFetching}>

                    <button type="submit" className='textinput loginbtn' value="Sumbit" disabled={isFetching}>Login</button>

                  </div>
                  <div className="text sign-up-text">Don't have an account? <Link to='/register'><label for="flip">Sigup now</label></Link></div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
