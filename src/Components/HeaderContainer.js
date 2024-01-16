import React from 'react'

const HeaderContainer = ({subtitle, title}) => {
  return (
    <header>
        <h1>{subtitle}</h1>
        <h2>{title}</h2>
    </header>
  )
}

export default HeaderContainer