import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
        color:'linear-gradient(135deg, rgba(171,73,222,1) 0%,rgba(73,84,222,1) 100%)',
        opacity:0,
    },
    {
        color:'linear-gradient(135deg, rgba(255,174,39,1) 0%,rgba(222,73,109,1) 100%)',
        opacity:0,
    },
    {
        color:'linear-gradient(135deg, rgba(222,73,109,1) 0%,rgba(171,73,222,1) 100%)',
        opacity:0,
    },
    {
        color:'linear-gradient(135deg, rgba(171,73,222,1) 0%,rgba(73,84,222,1) 100%)',
        opacity:0,
    },
    {
        color:'linear-gradient(135deg, rgba(73,84,222,1) 0%,rgba(73,221,216,1) 100%)',
        opacity:0,
    },
  ];
  let timeoutID;

  let slider = 0;
  const handleScroll = (event) => {
      if(timeoutID){
          clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
        
        if(event.deltaY>0){
            slider+=1;
        } else if(event.deltaY<0){
            slider-=1;
        }
        if(slider >= slides.length){
            slider =0
        } else if(slider < 0 ){
            slider = slides.length-1
        }
        setSlideIndex(slider);
    }, 80);
  };

  useEffect(() => {
    document.addEventListener('wheel', handleScroll);
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);
  const transitionStylesOld ='opacity 0.7s ease-out';
  const transitionStylesCurrent = 'opacity 0.3s ease-in';

  return (
    <div>
      {slides.map((slide, index) => (
        <div className="fixed" style={{ background: slide.color, transition: index === slideIndex?transitionStylesCurrent:transitionStylesOld, opacity:  index === slideIndex?1:slide.opacity }}></div>
      ))}
    </div>
  );
};

export default Slider;