import React from 'react'
import './Navbar.css'
import SideDrawer from './SideDrawer'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='icon'>
        <SideDrawer />
      </div>
      <img
        src='Qlert.png'
        height='80%'
        alt='logo'
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default Navbar
