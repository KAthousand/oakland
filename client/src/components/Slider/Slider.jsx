import React, { useState, useEffect} from 'react';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import slide1 from '../../assets/slide1.jpeg';
import slide2 from '../../assets/slide2.jpeg';
import slide3 from '../../assets/slide3.jpeg';
import slide4 from '../../assets/slide4.JPG';
import slide5 from '../../assets/slide5.jpeg';
import slide6 from '../../assets/slide6.jpeg';
import "./Slider.css"

function Slider(props) {

  const [backgroundColor, setBackgroundColor] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const myArr = [slide1, slide2, slide3, slide4, slide5, slide6];

  const goLeft = () => {
    if (slideIndex < myArr.length-1) {
      setTimeout(()=> setSlideIndex(slideIndex + 1), 250)
      setBackgroundColor(myArr[slideIndex]);
    } else {
      setTimeout(()=>setSlideIndex(0),250);
      setBackgroundColor(myArr[slideIndex]);
    }
  };
  
  const goRight = () => {
    if (slideIndex > 0) {
      setTimeout(() =>setSlideIndex(slideIndex - 1), 250);
      setBackgroundColor(myArr[slideIndex]);
    } else {
      setTimeout(() =>setSlideIndex(myArr.length - 1), 250);
      setBackgroundColor(myArr[slideIndex]);
    };
  }
  useEffect(() => {
    let intervalId;
    if (play) {
      intervalId = setInterval(goRight, 3000);
    }
    return () => {
      clearInterval(intervalId);
    }
  // eslint-disable-next-line
  }, [slideIndex, play])

  return (
    <div className='slider'>
      <div className='slide-nav'>
        <button className='slide-btn fas fa-angle-left' id='goLeft' onClick={goLeft}></button>
        <button className={ play ? 'play-btn fas fa-pause' : 'play-btn fas fa-play'} onClick={()=>setPlay(!play)}></button>
        <button className='slide-btn fas fa-angle-right' id='goLeft' onClick={()=>goRight()}></button>
      </div>
      <div className='slider-content' style={{backgroundImage: `url(${backgroundColor})`}}>
        {myArr.map((elem, idx) => {
          if (idx === 0) {
            return <CarouselSlide content={elem} slideIndex={slideIndex} idx={idx} myArr={myArr} key={idx+1}/>
          } else {
            return <CarouselSlide content={elem} slideIndex={slideIndex} idx={idx} myArr={myArr} key={idx+1}/>
          }
        })}
      </div>
    </div>
  );
}

export default Slider;