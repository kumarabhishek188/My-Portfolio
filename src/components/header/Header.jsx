import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import ME from '../../assets/Abhishek.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Abhishek Kumar</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
            <img
            style={{borderRadius:"100%"}}
            src={ME} alt='foto-pessoal'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header