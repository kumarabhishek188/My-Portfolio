import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Nav = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/abhishek-kumar-92157823a/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/kumarabhishek188"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/_Abhishek_kumar_/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/abhishekku2vf9/"
          target="_blank"
          rel="noreferrer"
        >
          <SiGeeksforgeeks />
        </a>
        <a
          href="https://www.instagram.com/abhishek_anand__._/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhishek. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Nav;
