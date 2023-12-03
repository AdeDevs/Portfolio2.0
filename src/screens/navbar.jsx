import { NavLink } from "react-router-dom";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
// import Ade from "../assets/ade.png";

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        {/* <h1><img src={Ade} alt="" /></h1> */}
        <h1>
          <NavLink to="/">AdeDevs</NavLink>
        </h1>
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>

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
    </div>
  );
}

export default NavBar;
