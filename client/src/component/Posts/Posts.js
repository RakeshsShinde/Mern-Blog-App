import React, { useState } from 'react';
import Card from '../Card/Card';

import Post from '../singlepost/Post';

import './Posts.css';
const Posts = ({ posts }) => {
    const [page, setpage] = useState(1);
    return (
        
            <div className='posts'>
                {posts.map(p => (
                    <Post post={p} key={p._id} />
                ))}
            </div>
       
    );
}

export default Posts;
