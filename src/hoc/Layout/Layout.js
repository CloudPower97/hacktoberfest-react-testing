import React from 'react'
import LogoAbstract from '../../assets/img/logo_abstract.svg'

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <img id="logo-abstract" src={LogoAbstract} alt="Logo Abstract-Technolgy" />
    </>
  )
}

export default Layout
