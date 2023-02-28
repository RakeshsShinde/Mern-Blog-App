import React, { useContext, useState } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './write.css';
import { BsFillFileEarmarkArrowUpFill } from 'react-icons/bs'
// import messi from '../../images/messi.jpg'
import axios from 'axios'
import { Context } from '../../context/Context';
const Write = () => {

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [file, setfile] = useState(null);
    const [cat, setcat] = useState("");
    const { user } = useContext(Context)
    
   
    const handlesubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            category:cat,
            userprofile:user.userprofile,

        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (error) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)
        } catch (error) {

        }

    }
    return (
        <div className='write'>
            {file && (
                <img src={URL.createObjectURL(file)}
                    alt='messi'
                    className='writeimg'
                />
            )}
            <form className='writeform' onSubmit={handlesubmit}>
                <div className='writeformgrp left-form'>
                    <div className='file-select'>
                        <label htmlFor='fileinput'>
                            <span><BsFillFileEarmarkArrowUpFill className='writeicon' /></span>
                        </label>
                        <input type='file' id='fileinput'
                            style={{ display: 'none' }}
                            onChange={(e) => setfile(e.target.files[0])} />
                        < input type='text' placeholder='title' size={35} autoFocus={true}
                            onChange={e => settitle(e.target.value)} />
                    </div>
                    <div className='editorcontainer'>
                        <textarea
                            style={{ width: "100%", height: "100%", padding: "20px" }}
                            placeholder='post description'
                            type="text"
                            className='editior'
                            onChange={e => setdesc(e.target.value)}
                        >

                        </textarea>
                    </div>
                </div>
                <div className='category-grp'>
                    <h1 className='cat-head'>choose category</h1>
                    <div className='radioinput'>
                        <input type={'radio'} name='cat' value="technology"
                        onChange={e=>setcat(e.target.value)}/>
                        <label >technology</label>
                    </div>
                    <div className='radioinput'>
                        <input type={'radio'} name='cat' value="sports"
                         onChange={e=>setcat(e.target.value)}/>
                        <label >sports</label>
                    </div>
                    <div className='radioinput'>
                        <input type={'radio'} name='cat' value="music"
                         onChange={e=>setcat(e.target.value)}/>
                        <label >music</label>
                    </div>
                    <div className='radioinput'>
                        <input type={'radio'} name='cat' value="politics"
                         onChange={e=>setcat(e.target.value)}/>
                        <label >politics</label>
                    </div>
                    <div className='radioinput'>
                        <input type={'radio'} name='cat' value="Agriculture"
                         onChange={e=>setcat(e.target.value)}/>
                        <label >Agriculture</label>
                    </div>
                    <div className='radioinput'>
                        <input type={'radio'} name='cat' value="Science"
                         onChange={e=>setcat(e.target.value)}/>
                        <label >Science</label>
                    </div>
                </div>

                <div className='right-form'>
                    <button type='submit' className='writesubmit'>Submit</button>
                </div>
            </form>
        </div>


    );
}

export default Write;
