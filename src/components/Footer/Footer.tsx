import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <span className='name'>
        Qlert made by -{' '}
        <a
          href='https://www.linkedin.com/in/fopa-kuete-duclair-85a758148/'
          target='__blank'
        >
          Démo FKD
        </a>
      </span>
      <hr style={{ width: '90%' }} />
      <div className='iconContainer'>
        <a href='https://github.com/weshare237' target='__blank'>
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/fopa-kuete-duclair-85a758148/'
          target='__blank'
        >
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
        <a href='https://demofkd.netlify.app/' target='__blank'>
          <i className='fas fa-link fa-2x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
