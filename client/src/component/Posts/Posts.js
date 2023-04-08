import React, { useState } from 'react';
import Post from '../singlepost/Post';
import './Posts.css';
const Posts = ({ posts }) => {
    return (
        <div className='posts' >
            {posts.map(p => (
                <Post post={p} key={p._id} />
            ))}
        </div>

    );
}

export default Posts;
