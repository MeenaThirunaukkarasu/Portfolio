import React from 'react';
import './skills.css';
import FullStack from '../../assets/fullstack.png';
import FrontEnd from '../../assets/frontend.png';
import BackEnd from '../../assets/backend.png';


const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate Web Developer in creating visually appealing and user-friendly websites. I have a strong understanding of development and a keen eye for detail. I am proficient in HTML, CSS, Javascript, React, Node.js, Bootstrap, AntDesign, Mailjet and Stripe Payment. </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={FullStack} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Fullstack Developer</h2>
            <p>Demo text Write my own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={FrontEnd} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front-end Developer</h2>
            <p>Demo text Write my own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={BackEnd} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Back-end Developer</h2>
            <p>Demo text Write my own content</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills