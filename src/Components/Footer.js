import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        className="footer d-flex pt-3 align-items-center justify-content-center flex-column"
      >
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/img/Logo.jpg"}
            alt="moden-lathe"
            width={200}
            height={60}
          />
        </Link>
        <ul className="footer-links">
          <li>
            <a href="www.facebook.com" className="socmed-links">
              <FontAwesomeIcon icon={faFacebook} />
              <span className="socmed-title">Facebook</span>
            </a>
          </li>
          <li>
            <a href="www.gmail.com" className="socmed-links">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="socmed-title">Email</span>
            </a>
          </li>
          <li>
            <a href="www.linkedin.com" className="socmed-links">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="socmed-title">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="www.instagram.com" className="socmed-links">
              <FontAwesomeIcon icon={faSquareInstagram} />
              <span className="socmed-title">Instagram</span>
            </a>
          </li>
        </ul>
        <hr className="footer-line" />
        <div className="copyrights text-center">
          Modern Lathe Copyright © 2024 | All Rights reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
