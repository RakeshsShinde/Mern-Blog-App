import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import aboutimg from '../../images/about.jpg'
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import axios from 'axios'
const Sidebar = () => {
    const [cat, setcat] = useState([]);

    useEffect(() => {
        const getcat = async () => {
            const res = await axios.get("/categories");
            setcat(res.data)
        }
        getcat()
    }, [])
    return (
        <div className='sidebar'>
            <div className='sidebaritem'>
                <span className='sidebartitle'>About me</span>
                <img src={aboutimg} alt={'aboutimg'} className='about-img'></img>
                <p>Mordern blog site where you can get latest content posts, all information regarding your
                    work ,you can access content according to your choice ,this site also have various features
                    search filter,authorization,fully encrypted,etc
                </p>
            </div>
            <div className='sidebaritem'>
                <span className='sidebartitle'>Categories</span>
                <ul className='sidebarlist'>
                    {cat.map((c) => (
                        <Link to={`/?cat=${c.name}`} key={c.name}>
                            <li className='sidebarlistitem'>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sidebaritem'>
                <span className='sidebartitle'>Follow us</span>
                <div className='sidebarsocial'>
                    <BsInstagram className='topicons insta' size={20} />
                    <BsWhatsapp className='topicons  whatsapp' size={20} />
                    <BsTwitter className='topicons twitter' size={20} />
                    <BsLinkedin className='topicons link' size={20} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
