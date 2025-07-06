import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Primary Language</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of Frontend*/}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle class="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
