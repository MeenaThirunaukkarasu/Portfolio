import React, { useRef } from 'react';
import './contact.css';
import Timeofwow from '../../assets/timeofwow.png';
import Travelcosmo from '../../assets/travelcosmo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging log

    emailjs
      .sendForm('service_zaqxtj8', 'template_98n7ezk', form.current, 'GaxKkwJX4x3AQqhmO')
      .then(
        (result) => {
          console.log('SUCCESS', result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Client</h1>
        <p className="clientDesc">I have had the opportunities to work with a diverse group of startups. Some of the notable companies I have worked with includes</p>
        <div className="clientImgs">
        {/* <h3 className='timeofwow'>Time of Wow</h3> */}
         <a href='https://timeofwow.com/'> <img src={Timeofwow} alt="Client" className="clientImg" /></a>
         <a href='https://www.linkedin.com/company/travelcosmo/about/'> <img src={Travelcosmo} alt="Client" className="clientImg" /></a>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
