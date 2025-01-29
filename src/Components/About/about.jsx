import React from 'react'
import './about.css'
import ME from '../../Assets/pot1.jpg'
import {FaAward, FaUsers} from 'react-icons/fa'
import {PiProjectorScreenChartFill} from 'react-icons/pi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <PiProjectorScreenChartFill className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          Hello world! I am Ugbobor Frank, a Frontend Web Developer based in Nigeria. From choreography on a page to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites
          I am exicted to make the leap and continue refining my skills with the right company.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
