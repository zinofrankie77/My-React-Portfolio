import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'> 
        <div className='programming__language'>
          <h3>Programming Language</h3>
          <div className='experience__content'>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>HTML</h4>
               </div>               
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>CSS</h4>
               </div> 
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>JavaScript</h4>
               </div> 
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>React JS</h4>
               </div> 
            </article>
          </div>
        </div> 
        
          <div className='frame__work'>
            <h3>Frame Work</h3>
            <div className='experience__content'>             
                <article className='experience__details'>
                   <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                   <h4>Tailwind</h4>
                   </div> 
                </article>         
                <article className='experience__details'>
                   <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                   <h4>Material UI</h4>
                   </div> 
                </article>
                <article className='experience__details'>
                   <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                   <h4>Wordpress</h4>
                   </div> 
                </article>
                <article className='experience__details'>
                   <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                   <h4>Responsive Web Design</h4>
                   </div> 
                </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default experience
