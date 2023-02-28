import React, { useEffect,useState ,useContext} from 'react';

import './Singlepost.css';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
const Singlepost = () => {
  const location = useLocation();
  const path = (location.pathname.split("/")[2]);
  const [post, setpost] = useState({});
  const{user}=useContext(Context);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [updatemode, setupdatemode] = useState(false);
  const pf="http://localhost:5000/images/";
  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("/posts/" + path);
      setpost(res.data);
      settitle(res.data.title);
      setdesc(res.data.desc);
    }
    getpost()
  }, [path])

  const handleupdate=async()=>{
    try {
      await axios.put(`/posts/${post._id}`,{
        username:user.username,
        title,
        desc,
      })
      window.location.reload();
    } catch (error) {
      
    }
  }

  const handledelete=async()=>{
    try {
      await axios.delete(`/posts/${post._id}`,{
        data:{username:user.username},
      })
      window.location.replace("/");
    } catch (error) {
      
    }
  }
  
  return (
    <div className='singlepost'>
      <div className='singlepostwrapper'>
        {post.photo && (
         <img src={pf+post.photo} className='singlepostimg' alt='blog-img' />
        )}
 
        <div className='basic-info'>
          <div className='author'>
          {post.userprofile && (
         <img src={pf+post.userprofile} className='user-img' alt='blog-img' />
        )}
        <div className='info'>
            <div className='author-info'>
              <span className=''><Link to={`/?posts=${post.username}`}><h1>{post.username}</h1></Link></span>
              <p className=''>{new Date(post.createdAt).toDateString()}</p>
            </div>
          </div>
          
            {post.username===user?.username && (
              <div className='singlepostedit'>
              <i><FiEdit className='singleposticon editbtn' size={22} onClick={()=>setupdatemode(true)} /></i>
              <i><AiOutlineDelete className='singleposticon deletebtn' size={22} onClick={handledelete}/></i>
              </div>
            )}
            </div>
            <div className='singlepostcontent'>
             {updatemode?<input type="text" 
             className='singleposttitleinput' 
             value={title} 
             autoFocus={true}
             onChange={(e)=>settitle(e.target.value)}
             />:(
              
              <h1 className='singleposttitle'>{post.title}</h1>
           
    
            
           
             )}

             {updatemode?<textarea className='singlepostDescinput' 
             value={desc} 
             onChange={(e)=>setdesc(e.target.value)}/>:(
              <p className='singlepostDesc'>{post.desc}</p>
             )}
             {updatemode?<button className='updatebtn'
             onClick={handleupdate}>update</button>:""}

</div>
            
        </div>
        
      </div>

    </div>
  );
}

export default Singlepost;
