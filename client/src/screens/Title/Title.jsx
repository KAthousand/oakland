import React from 'react';
import "./Title.css"

function Title(props) {
  return (
    <div className='title-container'>
      <div className='title-address'>
        <p>201 W. 9 MILE, FERNDALE, MI</p>
      </div>
      <div className='title-photo'>
        <div className='logo'></div>
      </div>
      <div className='title-info'>
        <div className='title-text'>
          <div className='title-header'>
            <h1>The Oakland</h1>
          </div>
          <div className='title-body'>
            <p>Blah blah blah</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;