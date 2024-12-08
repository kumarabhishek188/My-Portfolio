import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What do I offer?</h5>
      <h2>Services</h2>

      <div className='container service__container'>
          <article className='service'>
          <div className='service__head'>
            <h3>Qualifications</h3>
          </div>
              <ul className='service_list'>
                  <li>                  
                    <p><BsCheck2 className='service__list-icon'/>Pursuing in Information Science Engineering</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  
                  <p><BsCheck2 className='service__list-icon'/> Experience with code versioning using GIT</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Good programming logic </p>
                  </li>
              </ul> 
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Experience in Full-stack Web Development</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Experience in projects using React.js</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Intermediary Restful API Concepts</p>
                  </li>
              </ul>
          </article> 

          {/*End of this column*/}
          <article className='service'>
          <div className='service__head'>
            <h3>How can I collaborate? </h3>
          </div>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Help develop new features according to the product/customer roadmap</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Finding solutions to problems in the systems</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Act in the structuring and development of websites</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Support applications in production</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Gathering information</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Develop and maintain the systems</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Data modeling, and technical specification</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Consumption of APIs for integration with systems</p></li>
              </ul>
          </article> 
          {/*End of this column*/}

          <article className='service'>
          <div className='service__head'>
            <h3>Plus</h3>
          </div>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/>  Strong communication skills with the ability to discuss any issue with a wide variety of individuals and groups</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/>  Ability to remain professional in stressful situations/disputes</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/>Project work experience</p></li>
              </ul>          
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Oral and written communication skills in English and Hindi</p></li>
              </ul>   
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/>  Excellent discipline, focus and attention to detail. </p></li>
              </ul>                    
              
          </article> 
          {/*End of this column*/}
           
      </div>


    </section>
  )
}

export default Services