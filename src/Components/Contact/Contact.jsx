import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81dqtwf', 'template_k5gdd9j', form.current, '-663x8NYFYChq-alr')
      
    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>zinofrankie@gmail.com</h5>
            <a href="mailto:zinofrankie@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>zino frankie</h5>
            <a href="https://m.me/rexi.frankie" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone+2347066867877" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='sumbit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
