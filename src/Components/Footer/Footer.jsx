import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn, FaFacebookF, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FRANK UGBOBOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https:https://www.linkedin.com/in/frank-zino-a908431ab/" target="_blank"><FaLinkedinIn /></a>
        <a href="https://web.facebook.com/rexi.frankie/" target="_blank"><FaFacebookF /></a>
        <a href="https://twitter.com/frankie_zi18621" target="_blank"><BsTwitter /></a>
        <a href="https://www.instagram.com/zinofrankie/" target="_blank"><FaInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Frank Ugbobor. All right reserved.</small>

      </div>
    </footer>
  )
}

export default Footer
