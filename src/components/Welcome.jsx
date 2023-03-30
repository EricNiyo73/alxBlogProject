import { Link } from "react-router-dom";
import Homeimage from "../assets/omeimage.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="hometext">
      <div className="lefthome">
        <div className="homeupper">
          <h1>
            The latest articles and courses to help you upgrade your skills.
          </h1>
        </div>
        <div className="homelower">
          <h1>
            Master Web Development with amazing resources that are available for
            free! Join our Newsletter and get alerted when new articles, topics
            or courses are published.
          </h1>
        </div>
        <div className="homebuttons">
          <input
            type="text"
            className="newsletter"
            placeholder="email address"
          />

          <button className="homebutton">Subscribe</button>
        </div>
      </div>
      <div className="righthome">
        <img src={Homeimage} alt="home image" />
      </div>
      <div className="socialmedia">
        <Link to="https://twitter.com/EricNiyokwize10">
          <FaTwitter />
        </Link>
        <Link to="/https://github.com/EricNiyo73">
          <FaGithub />
        </Link>
        <Link to="/https://www.linkedin.com/in/eric-niyokwizerwa-489b74251/">
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
