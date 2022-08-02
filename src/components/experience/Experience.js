import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Web Development */}
        <div className="experience__web_dev">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>CSS, SCSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Elementary</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>Next</h4>
                <small className='text-light'>Elementary</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>PhP</h4>
                <small className='text-light'>Elementary</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Elementary</small>
              </div>
            </article>
          </div>
        </div>
        {/* 3D Design */}
        <div className="experience__3d_design">
          <h3>3D Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>AutoCad</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>Inventor</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>SolidWorks</h4>
                <small className='text-light'>Elementary</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience