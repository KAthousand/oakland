import {useState, useLayoutEffect, useRef} from 'react';
import "./Title.css"

function Title(props) {
  const titleInfoRef = useRef(null)
  const [state, setState] = useState(false)

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const titleInfoPos = topPosition(titleInfoRef.current);
      if (scrollPosition > titleInfoPos) {
        setState(true);
      } else {
        setState(false)
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[])

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
          <div className='title-body' ref={titleInfoRef}>

            {/* THIS IS WHAT IS IN THE ABOUT ME SECTION OF THE TITLE SCEEN */}
            <p>A friendly neighborhood bar in the heart of downtown Ferndale, MI serving world-class cocktails, exceptional American whiskey, and artisan Mezcal in a nostalgic and elegant environment</p>
          </div>
        </div>
        <div className={state ? 'coupe-hand': "left-title-transition"}></div>
        <div className={state ? 'bottle-hands' : "right-title-transition"}></div>
        <div className={state ? 'collins-hand' : "left-title-transition"}></div>
      </div>
    </div>
  );
}

export default Title;