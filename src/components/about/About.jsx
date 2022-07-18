import React from 'react'
import './about.css'
import ME from '../../assets/meee.jpg'
import { TbAward } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { BsFolderCheck } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <TbAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>...</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon' />
              <h5>Projects</h5>
              <small>4+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum ea officiis consequatur sit quia non quos voluptate doloremque iste dolores unde optio, recusandae rem reiciendis numquam porro voluptatem itaque.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About