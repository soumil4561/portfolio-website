import { contact } from "../data/info";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-heading">
        <h5>Something on your mind?</h5>
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-container">
        <div className="contact-links">
          {contact.map((item, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">
                {/* <LineIcon name="spinner" /> */}
                {/* <img src="/images/linkedin.svg" alt="linkedin" /> */}
              </div>
              <a href={item.link} target="_blank" rel="noreferrer">
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="contact-card">
          <div className="contact-card-container">
            <h5>Contact</h5>
            <h2>Let&apos;s get in touch</h2>
            <div className="name-box">
              <input type="text" placeholder="Name" />
            </div>
            <div className="email-box">
              <input type="text" placeholder="Email" />
            </div>
            <div className="message-box">
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="submit-button">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
