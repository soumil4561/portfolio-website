"use client";
import "./contact.css";
import { useState, useRef, useEffect } from "react";
import { contact } from "../data/info";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const contactCardRef = useRef(null);
  const isInView = useInView(contactCardRef, { once: true });

  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.clientHeight);
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!name) {
      var nameBox = document.getElementById("name");
      nameBox?.classList.add("highlight");
    }

    if (!email) {
      var emailBox = document.getElementById("email");
      emailBox?.classList.add("highlight");
    }

    if (!message) {
      var messageBox = document.getElementById("message");
      messageBox?.classList.add("highlight");
    }

    if (!name || !email || !message) {
      return;
    }

    if (!validateEmail(email)) {
      console.log("Invalid email address");
      return;
    }

    setIsLoading(true);
    let data = { name, email, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setTimeout(() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
          }, 1000);
        }, 500); // Delay to allow the expansion animation to play
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h5>Something on your mind?</h5>
        <h1>Get in Touch</h1>
      </motion.div>
      <div className="contact-container">
        <div className="contact-links">
          {contact.map((item, index) => (
            <motion.div
              key={index}
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="contact-icon"></div>
              <a href={item.link} target="_blank" rel="noreferrer">
                <span>{item.title}</span>
              </a>
              <div className="arrow"></div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="contact-card"
          ref={contactCardRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-card-container">
            <h5>Contact</h5>
            <h2>Let&apos;s get in touch</h2>
            {error && <p className="error">{error}</p>}
            {!isLoading && !isSuccess && (
              <div ref={formRef}>
                <div className="name-box">
                  <motion.input
                    type="text"
                    placeholder="Name"
                    value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="email-box">
                  <motion.input
                    type="text"
                    placeholder="Email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="message-box">
                  <motion.textarea
                    rows={4}
                    placeholder="Message"
                    value={message}
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  ></motion.textarea>
                </div>
              </div>
            )}
            <div className="submit-button">
              {!isLoading && !isSuccess && (
                <motion.button
                  type="submit"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Send Message
                </motion.button>
              )}
              {isLoading && (
                <motion.div
                  className="loading-box"
                  initial={{ height: "40px", y: formHeight }}
                  animate={{ height: formHeight, y: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              )}
              {isSuccess && <div className="success-tick">✔</div>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

//wait for 5 seconds
