import React, { useState } from 'react'
import HeaderContainer from './HeaderContainer'
import { projects } from '../JSON/ProjectList'

const BackCard = ({children}) => {
    const [selected, setSelected] = useState(projects[0]);

  return (
    <div className='backCard'>
        <div className='contentContainer' >
            <HeaderContainer projectName = {selected.title} />
            <div >{selected.content}</div>
            <div id='img' >c</div>
        </div>  
        <div className='contentContainer'>
            {projects.map((i)=><div onClick={()=>setSelected(i)}>{i.title}</div>)}
            <h4>Projects</h4>
        </div> 
    </div>
  )
}

export default BackCard