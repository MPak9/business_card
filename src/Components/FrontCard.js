import React from 'react'
import HeaderContainer from './HeaderContainer'

const FrontCard = ({children}) => {
  return (
    <div className='frontCard'>
        <div className='contentContainer'>a</div>
        <div className='contentContainer' >
            <HeaderContainer subtitle={'Job Title'} title={'Michelle Pak'}/>
            <div>
                <p>LN: linkedln.com</p>
                <p>michellepak9@gmail.com</p>
                <p>7063005341</p>
            </div>
            <div>QR</div>
        </div>

    </div>
  )
}

export default FrontCard