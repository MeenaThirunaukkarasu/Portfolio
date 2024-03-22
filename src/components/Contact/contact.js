import React from 'react'
import './contact.css';
// import Timeofwow from '../../assets/timeofwow.png';
 

const Contact = () => {
  return (
    <section id='contactPage'>
    <div id="clients">
        <h1 className="contactPage">My Client</h1>
        <p className="clientDesc">
            About Time of Wow
        </p>
        <div className="clientImgs">
           {/* <img src={Timeofwow} alt="Client" className="clientImg" /> */}
        </div>
    </div>
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out  the form below to discuss any work opportunities</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="text" className="email" placeholder='Your Email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="subbmitBtn">Submit</button>
        </form>
    </div>
    </section>
  )
}

export default Contact