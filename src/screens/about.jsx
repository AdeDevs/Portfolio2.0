import "../styles/about.css";
import '../styles/home.css';
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Ade from "../assets/ade.png";

function AboutScreen() {
  return (
    <div className="about-container">
      <nav className="nav-bar">
        <h1>
          <img src={Ade} alt="" />
        </h1>

        <ul>
          <li id="ab">About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

    <div className="about">
        <h1>i am a frontend developer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore at quidem doloremque consequuntur recusandae. Sint incidunt quidem.</p>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACTJS</li>
            <li>VUEJS</li>
            <li>DART</li>
        </ul>
    </div>

      <div className="socials">
        <ul>
          <li>
            <img src={Github} alt="github" />
          </li>
          <li>
            <img src={LinkedIn} alt="linkedin" />
          </li>
          <li>
            <img src={Twitter} alt="twitter" />
          </li>
        </ul>
      </div>

      <footer>
        <p>02</p>
      </footer>
    </div>
  );
}

export default AboutScreen;
