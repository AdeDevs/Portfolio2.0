import { NavLink } from "react-router-dom";
import "../styles/home.css";

function NavBar() {
  return (
    <div>
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
    </div>
  );
}

export default NavBar;
