import React from 'react'

const HeaderContainer = ({subtitle, title, projectName}) => {
  return (
    <header>
        <h1>{subtitle}</h1>
        <h2>{title}</h2>
        <h3>{projectName}</h3>
    </header>
  )
}

export default HeaderContainer

HeaderContainer.defaultProps = {
  subtitle:'',
  title:'',
  projectName:''
}