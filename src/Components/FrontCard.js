import React from 'react'
import HeaderContainer from './HeaderContainer'

const FrontCard = ({children}) => {
  return (
    <div className='frontCard'>
        <div className='contentContainer'>a</div>
        <div className='contentContainer' >
            <HeaderContainer subtitle={'Web Developer'} title={'Michelle Pak'}/>
            <div>
                <a href= {'https://www.linkedin.com/in/michellepak9'} target='blank'>www.linkedin.com/in/michellepak9</a>
                <p>michellepak9@gmail.com</p>
            </div>
            <div>QR</div>
        </div>

    </div>
  )
}

export default FrontCard