import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <h1>
            <Link to='/'>AdeDevs</Link>
        </h1>
        <h1><Link to='/about'>About</Link></h1>
    </nav>
  );
}

export default NavBar;