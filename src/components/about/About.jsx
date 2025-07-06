import React from "react";
import "./about.css";
// import ME from '../../assets/me-about.jpg'
import ME from "../../assets/Abhishek.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Come and meet me</h5> */}
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Year of operation</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Diverse Customers</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>+10 complete projects</small>
            </article>
          </div>

          <p>
            I started my journey in Information Science & Engineering at CMR
            Institute of Technology, Bangalore. During this time, I improved my
            public speaking and networking skills, and got hands-on experience
            with technologies like Python, HTML, CSS, JavaScript, React,
            Next.js, MySQL, Django, MongoDB, and other tools for both front-end
            and back-end development. This journey grew my love for technology
            and strengthened my goal of using my skills to create a positive
            impact in the world.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
