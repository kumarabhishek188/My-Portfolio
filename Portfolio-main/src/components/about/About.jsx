import React from 'react'
import './about.css';
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/Abhishek.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      {/* <h5>Come and meet me</h5> */}
      <h2>About me</h2>


      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Year of operation</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Diverse Customers</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projets</h5>
              <small>+10 complete projects</small>
            </article>
          </div>

          <p>
          I began my journey in Information Science Engineering at CMR Institute of Technology, Bangalore. Throughout this experience, I honed skills in public speaking, networking, and developed proficiency in various technologies such as Python, HTML, CSS, JavaScript, React, Next.js, MySQL, Django and MongoDB, and other front-end and back-end tools. This exposure deepened my passion for technology and solidified my commitment to leveraging my skills to make a positive social impact.
          </p>

          <a href='#contact' className='btn btn-primary'>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About