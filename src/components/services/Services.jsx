import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creative Concept & Design</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>UX Web Design</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Custom Web Platforms</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Adaptive Design</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Architecture</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Web Applications</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Web Maintenance</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Custom Web Development</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Front-end Development</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Illustration</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Design Consultancy</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Usability Testing</p>
            </li>
          </ul>
        </article>

        
      </div>
    </section>
  )
}

export default Services