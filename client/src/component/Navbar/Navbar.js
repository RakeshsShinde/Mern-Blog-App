

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri'
import profileimg from '../../images/messi.jpg'
import Dropdown from '../dropdown/Dropdown';
import { Context } from '../../context/Context';
function Navbar() {
    const [query, setquery] = useState("");
    const { user, dispatch } = useContext(Context)
    const [dropdown, setdropdown] = useState(true);
    const pf = "http://localhost:5000/images/";
    const hadlelogout = () => {
        dispatch({ type: "LOG_OUT" })
    }
    const mouseenter = () => {
        setdropdown(true);
    }

    const mouseleave = () => {
        setdropdown(false);
    }

    console.log(query);
    return (
        <div className='topbar'>

            <div className='left-nav'>
                <div className='left-nav-item'>

                    <Link to='/'>home</Link>
                    <div className='cat' onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                        <span style={{ cursor: 'pointer' }}>

                            categories

                            {dropdown && <Dropdown />}

                        </span>
                        <span><RiArrowDropDownLine size={25} /></span>
                    </div>

                    <Link to='/write' >write</Link>
                    <Link onClick={hadlelogout}>{user && "Logout"}</Link>
                </div>

            </div>
            <div className='middle-nav'>
                <input type='serach' name='search-input' placeholder='serach here..'
                    onChange={e => setquery(e.target.value)}></input>
                <BiSearch className='search-icons' size={20}></BiSearch>
            </div>
            <div className='right-nav'>
                {user ?
                    <Link to="/setting">
                        <img src={pf + user.profilepic} className='profile' alt='profile' />
                    </Link> :
                    <div className='btngrp'>
                        <Link to='/login' className='loginbtn'>log in</Link>
                        <div className='divider'></div>
                        <Link to='/register' className='registerbtn'>sing up</Link>
                    </div>

                }

            </div>
        </div>
    );
}




export default Navbar;
