import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';
import axios from 'axios'
const Dropdown = () => {
  const [cat, setcat] = useState([]);
  
  useEffect(() => {
    const getcat = async () => {
      const res = await axios.get("/categories");
      setcat(res.data)
    }
    getcat()
  }, [])



  const [click, setclick] = useState(false);

  const handleclick = () => {
    setclick(!click)
  }
  return (
    <>
      <ul onClick={handleclick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {cat.map((item, i) => {

          return (
            <li key={i} >
              <Link to={`/?cat=${item.name}`} className='dropdown-link' onClick={() => setclick(false)}>{item.name}</Link>
            </li>
          )

        })}

      </ul>
    </>
  );
}

export default Dropdown;
