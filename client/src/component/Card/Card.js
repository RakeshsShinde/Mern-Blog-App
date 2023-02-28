import React from 'react';
import './Card.css';
const Card = () => {
    return (
        <div className='post'>
         <div className="card">
        <div className="card-header">
          <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=d59d0cf6af1d779a3dca451e0ba259c33bbc6115&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2019%2F08%2F30142658%2F2020-jeep-wrangler-16.jpg&thumbnail=750%2C422&quality=80" alt="" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Technology</span>
          <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur distinctio neque?
          </p>
          <div className="user">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
            <div className="user-info">
              <h5>Jerome Walton</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Card;
