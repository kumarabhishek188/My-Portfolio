import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ThemeToggle from './components/theme/ThemeToggle'


export const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App




