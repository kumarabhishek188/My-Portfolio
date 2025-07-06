import React from "react";
import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What do I offer?</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Qualifications</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" />
                Recently graduated (2025) in Information Science & Engineering
                from CMRIT, Bangalore
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Good at programming
                logic and problem-solving
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Hands-on experience
                in full-stack web development
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Built projects using
                the MERN stack (MongoDB, Express, React, Node.js)
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Familiar with
                RESTful APIs and how they work
              </p>
            </li>
          </ul>
        </article>

        {/*End of this column*/}
        <article className="service">
          <div className="service__head">
            <h3>How can I collaborate? </h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Help build new
                features based on what the product or customers need
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Find and fix issues
                in the system
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Work on creating and
                improving websites
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Support apps that
                are already live and running
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Collect and
                understand information to help with development
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Build and maintain
                different systems
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Design how data is
                stored and write clear technical steps
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Use APIs to connect
                different systems and make them work together
              </p>
            </li>
          </ul>
        </article>
        {/*End of this column*/}

        <article className="service">
          <div className="service__head">
            <h3>Plus</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Comfortable using
                Git for version control and team collaboration
              </p>
            </li>
          </ul>

          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Worked on real
                projects, both individually and in teams
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" />
                Stay calm and professional even in stressful or challenging
                situations
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Can communicate well
                in both English and Hindi, written and spoken
              </p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <p>
                <BsCheck2 className="service__list-icon" /> Very disciplined,
                focused, and pay close attention to details
              </p>
            </li>
          </ul>
        </article>
        {/*End of this column*/}
      </div>
    </section>
  );
};

export default Services;
