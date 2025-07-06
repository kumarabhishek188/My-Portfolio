

import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fpc9byd",
        "template_cme8d8f",
        form.current,
        "-99Uwlxa-oeYKVINb" // User Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Let's talk!</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abhku21is@cmrit.ac.in</h5>
            <a
              href="mailto:abhku21is@cmrit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>8651887544</h5>
            <a
              href="https://wa.me/8651887544?text=Hello%20Abhishek,%20I%20would%20like%20to%20talk%20about%20..."
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="from_email" placeholder="E-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
