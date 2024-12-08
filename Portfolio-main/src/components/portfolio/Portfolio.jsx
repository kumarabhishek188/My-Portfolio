import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG8 from '../../assets/portfolio8.jpg'

const data = [
  // {
  //   id: 1, 
  //   image: IMG1,
  //   title: 'Admin-Dashboard React.js',
  //   github: 'https://github.com/kumarabhishek188/admin_dashboard',
  //   demo: 'https://admin-dashboard-mauve-five.vercel.app/',
  // },

  {
    id: 5, 
    image: IMG5,
    title: 'Cafe Management System',
    github: 'https://github.com/kumarabhishek188/Cafe-Management-System',
    demo: 'https://beautiful-scone-55ab8b.netlify.app/',
  },
  // {
  //   id: 2, 
  //   image: IMG2,
  //   title: 'Real Time Chat App - MERN',
  //   github: 'https://github.com/kumarabhishek188/Chat-app',
  //   demo: 'https://beautiful-scone-55ab8b.netlify.app/',
  // },
  {
    id: 3, 
    image: IMG3,
    title: 'Resume-Builder React.js',
    github: 'https://github.com/kumarabhishek188/Resume-Builder-Using-React',
    demo: 'https://resumebuilder01.netlify.app/',
    // demo: 'https://resume-builder-b.vercel.app/',
  },

  {
    id: 1, 
    image: IMG1,
    title: 'Admin-Dashboard React.js',
    github: 'https://github.com/kumarabhishek188/admin_dashboard',
    demo: 'https://admin-dashboard-mauve-five.vercel.app/',
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Todo-List',
    github: 'https://github.com/kumarabhishek188/To-Do-List',
    demo: 'https://todo-list-assignment1.vercel.app/',
  },

  // {
  //   id: 2, 
  //   image: IMG2,
  //   title: 'Real Time Chat App - MERN',
  //   github: 'https://github.com/kumarabhishek188/Chat-app',
  //   demo: 'https://beautiful-scone-55ab8b.netlify.app/',
  // },

  // {
  //   id: 5, 
  //   image: IMG5,
  //   title: 'Cafe Management System - MERN',
  //   github: 'https://github.com/kumarabhishek188/Cafe-Management-System',
  //   demo: 'https://beautiful-scone-55ab8b.netlify.app/',
  // },
 
  {
    id: 6, 
    image: IMG6,
    title: 'E-commerce website',
    github: 'https://github.com/kumarabhishek188/Ecommerce',
    demo: 'https://knighthood-ecommers.vercel.app/',
  }, 
  
  {
    id: 2, 
    image: IMG2,
    title: 'Real Time Chat App - MERN',
    github: 'https://github.com/kumarabhishek188/Chat-app',
    demo: 'https://beautiful-scone-55ab8b.netlify.app/',
  },


  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio </h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) =>{
              return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
            </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio
