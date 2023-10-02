import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
      avatar: AVTR1,
      name: "Queen Peters",
      review: "Without doubt one of the most talented programmers out there. I always go back to Frank when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed."
  },
  {
      avatar: AVTR2,
      name: "Cajeta Wings",
      review: "Frank is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my website."
  },
  {
      avatar: AVTR3,
      name: "Joshua Tega",
      review: "Fantastic service and a great guy. We recommend to anyone who needs a website or web services. We be using him for any further web based services we require!"
  },
  {
     avatar: AVTR4,
      name: "Peace Victor",
      review: "Extremely good service, easy to approach and relate with. I am happy with my decision for choosing Frank." 
  }
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map (({avatar, name, review}, index) => {
            return (
        <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar}/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>        
        </SwiperSlide> 
            )
          })
        }      
      </Swiper>
    </section>
  )
}

export default testimonials
