import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uos4mv8', 'template_4q3nd9q', form.current, 'z9lOBMsANQ0-xl2o5')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummygator@gmail.com</h5>
            <a href="mailto:dummygator@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <TbBrandMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Xhafer Muja</h5>
            <a href="https://m.me/xhafermuja1" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+23349219211" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact