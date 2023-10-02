import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <p className='service__p'>I code the Client-side of a web application, convert the design into a real-life application using HTML, CSS and JavaScript. and also ensure responsive and adaptive User Interface.</p>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Maintenance & Update</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Coding</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Analysis</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Design & Development</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <p className='service__p'>I can create engaging posts on your page, share graphically designed pictures and videos that would interest your potential buyers.</p>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Blog</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Educational Websites</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Video Content</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Social Media Update</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services
