import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/sam.png';
import Portfolio2 from '../../assets/todo.png';
import Portfolio3 from '../../assets/chic-eggs.png';


const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Projects</h2>
        <span className="worksDesc">Here, you will find a showcase of my skills, projects, and client collaborations.Dive in to explore my work and get in touch to discuss potential collaborations. Let's connect and build something amazing together! </span>
        <div className="worksImg">
           <a href='https://flourishing-halva-5e3584.netlify.app/'> <img src={Portfolio1} alt="" className="worksImg" /> </a>
           <a href='https://tiny-blue-stingray-vest.cyclic.cloud/'> <img src={Portfolio2} alt="" className="worksImg" /> </a>
           <a href='https://sunitha-arockia-dass.github.io/Chic-Eggs/'> <img src={Portfolio3} alt="" className="worksImg" /> </a>
        </div>
        {/* <button className="workBtn">See More</button> */}
    </section>
  );
}

export default Works;