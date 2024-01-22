import React from 'react'
import HeaderContainer from './HeaderContainer'

const FrontCard = ({children}) => {
  return (
    <div className='frontCard'>
        <div className='contentContainer'>
          <div className='imageContainer'style={{justifyContent:'center', objectFit:'contain'}}>
            <img src='https://cdn.discordapp.com/attachments/1075543412582924378/1199057098810609836/BuisinessCardPortrait.png?ex=65c127f1&is=65aeb2f1&hm=c5370a912a27c163e94a07c77d054a9375c93a23515cb4c839abb5eb81b59e48&' style={{ objectFit:'contain', alignSelf:'center', maxHeight:'50vh'}} />
          </div>
        </div>
        <div className='contentContainer' >
            <HeaderContainer subtitle={'Web Developer'} title={'Michelle Pak'}/>
            <div>
                <a href= {'https://www.linkedin.com/in/michellepak9'} target='blank'>www.linkedin.com/in/michellepak9</a>
                <p className='selectable' onClick={(e)=>{navigator.clipboard.writeText(e.currentTarget.textContent)}}>
                  michellepak9@gmail.com
                </p>
            </div>
            <div style={{display:'flex', flexDirection:'row'}} >
              <p>Click to copy QR Code link</p>
            </div>
        </div>

    </div>
  )
}

export default FrontCard