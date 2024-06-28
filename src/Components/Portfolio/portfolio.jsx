import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'


const data = [
  {
      id: 1,
      image: IMG1,
      title: 'Fink Social App',
      github: "https://github.com/zinofrankie77/fink-social",
      demo: "https://fink-social.vercel.app/",
  },
  {
      id: 1,
      image: IMG1,
      title: 'Fink Social App',
      github: "https://github.com/zinofrankie77/fink-social",
      demo: "https://fink-social.vercel.app/",
  },
  {
      id: 2,
      image: IMG2,
      title: 'Fink Gym',
      github: "https://github.com/zinofrankie77/FinkGym-App",
      demo: "https://fink-gym-app.vercel.app/"
  },{
      id: 3,
      image: IMG3,
      title: 'Fink Photography',
      github: "https://github.com/zinofrankie77/FINK-PHOTO",
      demo: "https://fink-photo.vercel.app/"
  
  },{
      id: 4,
      image: IMG4,
      title: 'React Portfolio',
      github: "https://github.com/zinofrankie77/My-React-Portfolio",
      demo: "https://frankzino.vercel.app/"
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio
