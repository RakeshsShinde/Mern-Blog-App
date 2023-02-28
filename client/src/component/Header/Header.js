import React from 'react';
import './Header.css'
import headerimg from '../../images/headerbg.jpg'
import TypewriterComponent from 'typewriter-effect';
const Header = () => {
    return (
        <div className='header'>
            <div className='headertitles'>
                <span className='headertitle1'><h1>Blog site for ,</h1> <span className='tyewriter-text'><TypewriterComponent options={
                  {
                    loop:true,
                    autoStart:true,
                    delay:200,
                   
                  }  
                  
                }
                onInit={(TypewriterComponent=>{
                    TypewriterComponent.typeString('Student').pauseFor(1000).deleteAll()
                    .typeString('Learner').pauseFor(1000).deleteAll().typeString('Professional').pauseFor(1000).
                    deleteAll().start();
                })}/>
                   
              </span> </span>
            </div>
         <img src={headerimg}  />
            
        </div>
    );
}

export default Header;
