import React from 'react';
import './Information.css'

function Information(props) {
  return (
    <div className='info-container' id='info'>
      <div className='info-content'>
        <div className='info-text'>
          <div className='info-header'><h5>LOCATION</h5></div>
          <div className='info-body'><p>201 W. 9 MILE RD, FERNDALE, MI 48220</p></div>
          <a href='https://www.google.com/maps?q=201+W+9+Mile+Rd,+Ferndale,+MI&hl=en&sll=45.00109,-86.270553&sspn=14.885097,29.355469&oq=201+W+9+Mile+&hnear=201+W+9+Mile+Rd,+Ferndale,+Michigan+48220&t=m&z=17' target="_blank" rel="noreferrer">
            <button className='map-btn'>MAP</button>
          </a>
          <div className='info-header'><h5>HOURS</h5></div>
          <div className='info-body'>

            {/* THIS IS WHERE YOU WOULD EDIT THE HOURS */}
            <p>TUES - THURS: 5<span className='hours'>pm</span>-12:30<span className='hours'>am</span></p>
            <p>FRI - SAT: 5<span className='hours'>pm</span>-1:30<span className='hours'>am</span></p>
            <p>SUNDAY: 5<span className='hours'>pm</span>-12:30<span className='hours'>am</span></p>
          </div>

          {/* THIS IS WHERE YOU WOULD EDIT CONTACT INFORMATION */}
          <div className='info-header'><h5>CONTACT</h5></div>
          <div className='info-body'><p>(248)291-5295</p>
            <a href="mailto:info@theoaklandferndale.com" className='email'>info@theoaklandferndale.com</a>
          </div>
          <div className= 'icon-container'>
            <a href='http://www.facebook.com/ArtNoveltyCompany' target="_blank" rel="noreferrer"><i className='fab fa-facebook-square'></i></a>
            <a href='http://www.instagram.com/artnoveltycompany' target="_blank" rel="noreferrer"><i className='fab fa-instagram-square'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;