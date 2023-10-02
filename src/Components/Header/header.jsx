import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/zizi-1.png'
import Headersocials from './Headersocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Frank Ugbobor</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA/>
        <Headersocials/>
  

        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header