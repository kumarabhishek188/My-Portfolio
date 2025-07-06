import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";
import IMG10 from "../../assets/portfolio10.jpg";
import IMG11 from "../../assets/portfolio11.jpg";
import IMG12 from "../../assets/portfolio12.jpg";

const data = [
  {
    id: 8,
    image: IMG8,
    title: "My Portfolio",
    github: "https://github.com/kumarabhishek188/My-Portfolio",
    demo: "https://abhishek-portfolio2025.netlify.app/",
  },

  {
    id: 7,
    image: IMG7,
    title: "Real Time AI Image Caption Generator",
    github: "https://github.com/kumarabhishek188/Real-Time-AI-Image-Captioner",
    // demo: '',
  },

  {
    id: 9,
    image: IMG9,
    title: "Doctor Patient Appointment Booking System - MERN",
    github:
      "https://github.com/kumarabhishek188/Doctor-Patient-Appointment-Booking",
    demo: "https://splendorous-beignet-2007e7.netlify.app/",
  },

  {
    id: 10,
    image: IMG10,
    title: "Online Quiz Platform",
    github: "https://github.com/kumarabhishek188/Online-Quiz-Platform-React",
    demo: "https://online-quiz-platform-react.netlify.app/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Cafe Management System - MERN",
    github: "https://github.com/kumarabhishek188/Cafe-Management-System",
  },
  {
    id: 3,
    image: IMG3,
    title: "Resume-Builder React.js",
    github: "https://github.com/kumarabhishek188/Resume-Builder-Using-React",
    demo: "https://resumebuilder01.netlify.app/",
    // demo: 'https://resume-builder-b.vercel.app/',
  },

  {
    id: 1,
    image: IMG1,
    title: "Interactive Admin-Dashboard - MERN",
    github: "https://github.com/kumarabhishek188/admin_dashboard",
    demo: "https://admin-dashboard-mauve-five.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Personal Task Tracker",
    github: "https://github.com/kumarabhishek188/Personal-Task-Tracker",
    demo: "https://personal-task-tracker-react.vercel.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Real Time Chat App - MERN",
    github: "https://github.com/kumarabhishek188/Chat-app",
  },

  {
    id: 6,
    image: IMG6,
    title: "E-Commerce Website",
    github: "https://github.com/kumarabhishek188/Ecommerce",
    demo: "https://knighthood-ecommers.vercel.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Task Management - MERN",
    github: "https://github.com/kumarabhishek188/Task-Mgmnt---MERN",
    demo: "https://mern-task-management-client.vercel.app/entry",
  },
  {
    id: 12,
    image: IMG12,
    title: "Student ID Generator",
    github: "https://github.com/kumarabhishek188/Student-ID-Generator",
    demo: "https://studentidgenerator.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
