import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/xhafer-muja-48aab9238/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/xhafermuja" target="_blank"><FaGithub /></a>
        <a href="https://facebook.com/xhafermuja1" target="_blank"><AiFillFacebook /></a>
    </div>
  )
}

export default HeaderSocials