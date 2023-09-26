import '../styles/home.css';
import Github from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';

function HomeScreen() {
  return (
    <div className="container">
      <nav className='nav-bar'>
        <h1>Adeyemi Akinyemi</h1>

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
    </div>
  );
}

export default HomeScreen;
