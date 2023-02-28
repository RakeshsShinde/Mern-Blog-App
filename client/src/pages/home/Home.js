import React, { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Posts from '../../component/Posts/Posts';
import Sidebar from '../../component/sidebar/Sidebar';
import axios from 'axios';
// import { Context } from '../../context/Context';

import './Home.css';
import { useLocation } from 'react-router-dom';
const Home = () => {
    const [posts, setposts] = useState([]);
    const { search } = useLocation();
    // const { postState, postDispatch } = useContext(Context);
    // console.log(postState);



    useEffect(() => {
        const fetchposts = async () => {
            const res = await axios.get("/posts" + search)
            setposts(res.data);
        }
        fetchposts()
    }, [search])



    return (

        <>

            <Header />

            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
