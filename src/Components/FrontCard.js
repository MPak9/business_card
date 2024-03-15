import React from 'react'
import { useState, useEffect } from 'react'
import HeaderContainer from './HeaderContainer'
import portrait from '../Resources/Portrait.png'
import qrCode from '../Resources/QR code link.png'

const FrontCard = ({children}) => {
  const [copyActive, setCopyActive] = useState(false);

  const clickCopy = (copied) => {
    navigator.clipboard.writeText(copied);
    setCopyActive(true);
    setTimeout(()=> {
      setCopyActive(false);
    },650)  
  }

  return (
    <div className='frontCard card-grid-layout'>
      <div className='flex-content-container'>
        <div className='imageContainer contentContainer'style={{justifyContent:'center', objectFit:'contain'}}>
          <img className='dropshadow' src={portrait} style={{ objectFit:'contain', alignSelf:'center', maxHeight:'50vh'}} />
        </div>
        <div className='contentContainer content-center' >
            <HeaderContainer subtitle={'Web Developer'} title={'Michelle Pak'}/>
            <div>
                <a href= {'https://www.linkedin.com/in/michellepak9'} target='blank'>
                  www.linkedin.com/in/michellepak9
                  <span>
                    <svg className='selectableSVG' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{marginTop:'1rem', marginLeft:'0.5rem'}}  ><path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"/>
                    </svg>
                  </span>
                </a>
                <p>
                  michellepak9@gmail.com
                  <span className={copyActive == true ? 'copySVG' : ''} onClick={() => clickCopy('michellepak9@gmail.com')}>
                    <svg className='selectableSVG' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" style= {{marginLeft:'1rem'}}viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
                    </svg>
                  </span>
                </p>
            </div>
            <div style={{display:'flex', flexDirection:'row'}} >
            <img className='dropshadow' id='qrCode' src={qrCode} style={{ objectFit:'contain', alignSelf:'flex-start', maxHeight:'10vh'}} />
            </div>
        </div>
      </div>
        

    </div>
  )
}

export default FrontCard