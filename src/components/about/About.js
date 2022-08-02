import React from 'react'
import './about.css'
import {FaAward, FaUsers} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'
import ME from '../../assets/3x4avt.png'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me_image'>
            <img src={ME} alt='About image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>9 Months Internship</small>
            </article>
            
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article>

            <article className="about__card">
              <VscProject className='about__icon'/>
              <h5>Project</h5>
              <small>5 projects</small>
            </article>
          </div>

          <div className="text">
            <p>
            Thank you man. Wow, I always wanted to learn 
            front-end development and I definitely learned 
            a lot throughout the whole build!! Thanks to you 
            I built my first site ;) Cheers and thank you for 
            all the effort that you are putting in your videos. 
            Simply awesome brother
            </p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About