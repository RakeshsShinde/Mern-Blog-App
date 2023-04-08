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
    const location = useLocation();
    const search = new URLSearchParams(location.search).get('search');
    const category = new URLSearchParams(location.search).get('cat');
    const username = new URLSearchParams(location.search).get('username');

    useEffect(() => {
        const endpoint = category ? `/posts/?cat=${category}`
            : search ? `/posts/?search=${search}`
                : username ? `/posts/?username=${username}`
                    : '/posts';
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(endpoint);
                setposts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [search, category, username]);


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
