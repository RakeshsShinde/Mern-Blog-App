import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import axios from 'axios'
const Post = ({ post }) => {
    const pf = "http://localhost:5000/images/";
    const [cat, setcat] = useState([]);

    useEffect(() => {
        const getcat = async () => {
            const res = await axios.get("/categories");
            setcat(res.data)
        }
        getcat()
    }, [])
    return (
        <div className='post'>
            {post.photo && (
                <img src={pf + post.photo}
                    className='postimg'
                    alt='messi.jpg'>
                </img>
            )}
            <div className='post-info'>
                <div className='postcats'>
                    <Link to={`/?cat=${post.category}`}>
                        <span className='postcat '>{post.category}</span>
                    </Link>
                </div>

                <Link to={`/post/${post._id}`}>
                    <span className='posttitle'>{post.title}</span>
                </Link>
                <hr />
                <div className='user-info'>
                    <Link to={`/?user=${post.username}`}>
                        <span className='postuser'>{post.username}</span>
                    </Link>
                    <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>

                <p className='post-description'>{post.desc}</p>
            </div>
        </div>
    );
}

export default Post;
