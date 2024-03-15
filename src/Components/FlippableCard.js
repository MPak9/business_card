import React from 'react'
import { useState } from 'react';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const FlippableCard = ({children}) => {

  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(0);

  const [isLeftFlipped, setIsLeftFlipped] = useState(false);
  const [isRightFlipped, setIsRightFlipped] = useState(false);
  const [deg, setDeg] = useState(0);

  //https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  
  const [touchStartY, setTouchStartY] = useState(null)
  const [touchEndY, setTouchEndY] = useState(null)

  const minSwipeDistance = 50 

  function onTouchStart(e) {
      setTouchEndX(null)
      setTouchStartX(e.targetTouches[0].clientX)

      setTouchEndY(null)
      setTouchStartY(e.targetTouches[0].clientY)
  }

  function onTouchMove(e) {
      setTouchEndX(e.targetTouches[0].clientX)
      setTouchEndY(e.targetTouches[0].clientY)
  }

  function onTouchEnd() {
      if (touchStartX && touchEndX) swipeHorizontal();
      if (touchStartY && touchEndY) swipeVertical()
  }

  function swipeHorizontal() {
    const xDistance = touchStartX - touchEndX
    const yDistance = touchStartY - touchEndY
    if (Math.abs(yDistance) >= Math.abs(xDistance)) {
        return;
    }

    const isLeftSwipe = xDistance > minSwipeDistance
    const isRightSwipe = xDistance < -minSwipeDistance

    if (isLeftSwipe) {
      

      setDeg(prev => prev - 180);
      
      setIsRightFlipped(false);

      if(!isLeftFlipped) {
        setIsLeftFlipped(true);
        return;
      }

    }

    if (isRightSwipe) {
        

      setDeg(prev => prev + 180);

      setIsLeftFlipped(false);

      if(!isRightFlipped) {
        setIsRightFlipped(true);
        return;
      }
    }
  }

  function swipeVertical() {

    const xDistance = touchStartX - touchEndX
    const yDistance = touchStartY - touchEndY
    if (Math.abs(xDistance) >= Math.abs(yDistance)) {
        return;
    }

    const isUpSwipe = yDistance > minSwipeDistance
    const isDownSipe = yDistance < -minSwipeDistance

    if (isDownSipe) {
        //onSwipeDown
    }

    if (isUpSwipe) {
        //onSwipeUp
    }
}

  return (
    <>
      <div className={`flippableCardContainer ${isLeftFlipped ? 'flipNeg180' : ''}`} 

      //style={{transform: `${isLeftFlipped ? `rotateY(${deg}deg)` : ''}`}}
      //style = {{ transformStyle:'preserve-3d', transform: `${isLeftFlipped ? `perspective(1000px) rotate3d(0, 1, 0, ${deg}deg)` : ''}`}}

      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className='card'>
          {children}
        </div>
      </div>
      {/* <br/>
      <button onClick={(e) => { 
          e.preventDefault();  
          setIsFlipped(prev => !prev);
        }
      }>
        FLIP!
      </button> */}

    </>
  )
}

export default FlippableCard