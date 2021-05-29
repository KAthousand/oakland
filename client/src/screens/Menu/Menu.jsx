import React from 'react';
import MenuButton from '../../components/MenuButton/MenuButton';
import "./Menu.css"

function Menu(props) {
  return (
    <div className='menu-container' id='menu'>
      <div className='grid'>
        <div className='top-left photo'></div>
        <div className='top-center photo'></div>
        <div className='bottom-left photo'></div>
        <div className='bottom-center photo'></div>
      </div>
      <div className='bottom-right photo'></div>
      <div className='menu-btn-container'>
        <MenuButton/>
      </div>
    </div>
  );
}

export default Menu;