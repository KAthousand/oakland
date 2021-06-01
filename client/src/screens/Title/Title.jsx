import React from 'react';
import "./Title.css"

function Title(props) {
  return (
    <div className='title-container' id='title'>
      <div className='title-address'>
        <p>201 W. 9 MILE, FERNDALE, MI</p>
      </div>
      <div className='title-photo'>
        <div className='logo'></div>
      </div>
      <div className='title-info'>
        <div className='title-text'>
          <div className='title-body'>
            <p>A friendly neighborhood bar in the heart of downtown Ferndale, MI serving world-class cocktails, exceptional American whiskey, and artisan Mezcal in a nostalgic and elegant environment</p>
          </div>
        </div>
        <div className="coupe-hand"></div>
        <div className="bottle-hands"></div>
        <div className="collins-hand"></div>
      </div>
    </div>
  );
}

export default Title;