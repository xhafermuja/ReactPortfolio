import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>XhaferMuja</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/xhafermuja1"><FaFacebookSquare /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Xhafer Muja</small>
      </div>
    </footer>
  )
}

export default Footer