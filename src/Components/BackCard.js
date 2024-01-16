import React, { useState } from 'react'
import HeaderContainer from './HeaderContainer'

const BackCard = ({children}) => {
    const info = [
        {name:'Toasty Sandwich'},
        {name:'Gusda'},
        {name:'Wrigley Consulting'},
        {name:'Christian Eclipse'},
    ]
    const [selected, setSelected] = useState();



  return (
    <div className='backCard'>
        <div className='contentContainer' >
            <HeaderContainer subtitle={selected.name} title={selected.name} />
            <div >b</div>
            <div id='img' >c</div>
        </div>  
        <aside className='contentContainer'>
            {info.map((i)=><div onClick={()=>setSelected(i)}>{i.name}</div>)}
            <h3>Projects</h3>
        </aside> 
    </div>
  )
}

export default BackCard