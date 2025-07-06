import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
