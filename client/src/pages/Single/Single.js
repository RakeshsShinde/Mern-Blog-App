import React from 'react';
import Singlepost from '../../component/Singlepostc/Singlepost';
import Sidebar from '../../component/sidebar/Sidebar';
import './Single.css';
const Single = () => {
    return (
        <div className='single'>
            <Singlepost />
            <Sidebar/>
        </div>
    );
}

export default Single;
