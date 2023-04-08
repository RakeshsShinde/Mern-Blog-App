import React, { useContext, useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import './setting.css';
import { FiEdit2 } from 'react-icons/fi'
import { Context } from '../../context/Context';
import axios from 'axios';
const Setting = () => {
    const { user, dispatch } = useContext(Context)
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [file, setfile] = useState(null);
    const [success, setsuccess] = useState(false);
    const pf = "http://localhost:5000/images/";
    const handlesubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password

        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilepic = filename;
            try {
                await axios.post("/upload", data);

            } catch (error) {

            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser)
            setsuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (error) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }
    return (
        <div className='setting'>
            <div className='settingwrapper'>
                <div className='setting-title'>
                </div>
                <form className='setting-form' onSubmit={handlesubmit}>

                    <img src={file ? URL.createObjectURL(file) : pf + user.profilepic} alt='profile'
                        className='profile-img' />
                    <div className='editprofile'>
                        <label htmlFor='fileinput'>
                            <FiEdit2 className='editbtn' />
                        </label>
                        <input type='file' className='fileinput' id='fileinput'
                            style={{ display: 'none' }}
                            onChange={(e) => setfile(e.target.files[0])} />
                    </div>
                    <div className='input-control'>
                        <label for="name">fullname</label>
                        <input type='text' placeholder={user.username}
                            onChange={(e) => setusername(e.target.value)} />
                    </div>
                    <div className='input-control'>
                        <label for="Email">Email</label>
                        <input type='email' placeholder={user.email}
                            onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className='input-control'>
                        <label for="password">Password</label>
                        <input type='password'
                            placeholder='**********'
                            onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className='updateinfo'>
                        <button type='submit' className='updateinfobtn'>Update</button>

                    </div>
                    {success && (
                        <h2 style={{ color: "green", marginLeft: "50px" }}>profile has been updated !</h2>
                    )}
                </form>

            </div>

            <Sidebar />
        </div>
    );
}

export default Setting;
