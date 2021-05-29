import {useState} from 'react';
import "./Header.css"

function Header(props) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className='header-container'>
      <div className='header-content'>
      <a href='#title' className='logo'  alt='home'> </a>
        <a href='#menu' className='nav-link'>MENU</a>
        <a href='#info' className='nav-link'>LOCATION &amp; HOURS</a>
        <a href='https://app.upserve.com/b/the-oakland/gift-card ' className='nav-link'>GIFT CARDS</a>
        <a href='https://www.exploretock.com/theoakland' className='nav-link reservation'>RESERVATIONS</a>
      </div>
      <div className='nav-menu'>
        <div className='logo'></div>
        <div className={navOpen ? 'nav-icon2' : 'nav-icon'}>
          <button onClick={() => setNavOpen(!navOpen)}></button>
        </div>
      </div>
      <div className={navOpen ? 'mobile-nav' : 'mobile-nav-closed'}>
        <div className={navOpen ? 'mobile-nav-content' : 'mobile-nav-content-closed'}>
        <a href='_blank' className={navOpen ? 'mobile-link' : 'mobile-link-closed'}>ORDER ONLINE</a>
          <a href='/menu' className={navOpen ? 'mobile-link' : 'mobile-link-closed'}>MENU</a>
          <a href='/info' className={navOpen ? 'mobile-link' : 'mobile-link-closed'}>LOCATION &amp; HOURS</a>
          <a href='_blank' className={navOpen ? 'mobile-link' : 'mobile-link-closed'}>PRIVATE EVENTS</a>
          <a href='_blank' className={navOpen ? 'mobile-link reservation' : 'mobile-link-closed'}>RESERVATIONS</a>
        </div>
      </div>
    </div>
  );
}

export default Header;