import { Fade } from "react-reveal";
import '../styles/portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio-container">
     <div className="portfolio">
      <h1>Projects</h1>
      <section className="projects">
        <div><a href="https://kryptyktodo.netlify.app/" target="_parent"> Task Tracker</a></div>
        <div><a href="https://kryptykshop.web.app/" target="_parent"> E-Commerce</a></div>
        <div><a href="https://dial247security.com/" target="_parent"> Dial247</a></div>
        <div><a href="https://kryptykscissors.web.app/" target="_parent"> Scissors</a></div>
        <div><a href="https://kryptykreducer.web.app/" target="_parent"> Qoutes</a></div>
        <div><a href="https://kryptykcalculator.web.app/" target="_parent"> Calculator</a></div>
      </section>
     </div>

      <footer>
        <Fade bottom>
          <p>03</p>
        </Fade>
      </footer>
    </div>
  );
}

export default Portfolio;
