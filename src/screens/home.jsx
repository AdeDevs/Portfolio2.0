import { Fade } from 'react-reveal';
import '../styles/home.css';

function HomeScreen() {
  return (
    <div className="home-container">

      <div className='title'>
        <Fade top>
        <h1>Adeyemi Akinyemi</h1>
        <p>Frontend Developer</p>
        </Fade>
      </div>

      <footer>
        <Fade bottom>
        <p>01</p>
        </Fade>
      </footer>
    </div>
  );
}

export default HomeScreen;
