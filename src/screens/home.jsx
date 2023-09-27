import '../styles/home.css';
import Github from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Ade from '../assets/ade.png';

function HomeScreen() {
  return (
    <div className="home-container">
      <nav className='nav-bar'>
        <h1><img src={Ade} alt="" /></h1>

        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="socials">
        <ul>
          <li><img src={Github} alt="github" /></li>
          <li><img src={LinkedIn} alt="linkedin" /></li>
          <li><img src={Twitter} alt="twitter" /></li>
        </ul>
      </div>

      <div className='title'>
        <h1>Adeyemi Akinyemi</h1>
        <p>Frontend Developer</p>
      </div>

      <footer>
        <p>01</p>
      </footer>
    </div>
  );
}

export default HomeScreen;
