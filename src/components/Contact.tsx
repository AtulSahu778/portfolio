import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sahuatul2005@gmail.com" data-cursor="disable">
                <SiGmail size={20} />
              </a>
            </p>
            <h4>Location</h4>
            <p>Ranchi, India</p>
            <h4>Education</h4>
            <p>
              B.Sc. Information Technology <br />
              St. Xavier's College, Ranchi <br />
              2025 — Present
            </p>
            <p>
              Higher Secondary (+2) – PCM <br />
              Jawahar Navodaya Vidyalaya <br />
              2021 — 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AtulSahu778"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/atulsahu"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Ofc_atul"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/ofc_atul"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Atul Sahu</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
