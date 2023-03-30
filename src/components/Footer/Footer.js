import "./Footer.css";

// Icons
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="brand-and-social container">
        <span className="brand">Loopstudios</span>
        <div className="socialIcons">
          <a href="#/">
            <AiFillFacebook className="facebook-icon" />
          </a>
          <a href="#/">
            <AiOutlineTwitter className="twitter-icon" />
          </a>
          <a href="#/">
            <BsPinterest className="pinterest-icon" />
          </a>
          <a href="#/">
            <AiOutlineInstagram className="instagram-icon" />
          </a>
        </div>
      </div>

      <div className="container nav-footer-copyright">
        <ul className="nav-footer">
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">Careers</a>
          </li>
          <li>
            <a href="#/">Events</a>
          </li>
          <li>
            <a href="#/">Products</a>
          </li>
          <li>
            <a href="#/">Support</a>
          </li>
        </ul>
        <div className="socialIcons-mobile">
          <a href="#/">
            <AiFillFacebook className="facebook-icon" />
          </a>
          <a href="#/">
            <AiOutlineTwitter className="twitter-icon" />
          </a>
          <a href="#/">
            <BsPinterest className="pinterest-icon" />
          </a>
          <a href="#/">
            <AiOutlineInstagram className="instagram-icon" />
          </a>
        </div>
        <span className="copyright">
          © 2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
