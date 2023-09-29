import '../styles/contact.css';
import mail from '../assets/mail.png';
import phone from '../assets/telephone.png';
import location from '../assets/location.png';
import { Slide, Fade } from 'react-reveal';

function ContactScreen(params) {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className='contact-info'>
          <Slide left>
        <section>
            <h1>contact me</h1>
            <div><p><a href="mailto:adeyemiakinyemi01@gmail.com" target="_parent"> <span><img src={mail} alt="mail" /></span> info@adedevs.com </a></p></div>
            <div><p><a href="tel: +2347045774783"> <span><img src={phone} alt="phone" /></span> +2341234567890 </a></p></div>
            <div><p><a href="https://bit.ly/3ZHh3dO" target='_parent'> <span><img src={location} alt="location" /></span> Lagos, Nigeria </a></p></div>
        </section>
        </Slide>
        <Slide right>
        <section>
            <input type="email" placeholder='Email' required/>
            <input type="text" placeholder='Name' required/>
            <textarea name="message" id="" placeholder='Message' required></textarea>
            <button>Send</button>
        </section>
        </Slide>
        </div>
      </div>

      <footer>
        <Fade bottom>
        <p>04</p>
        </Fade>
      </footer>
    </div>
  );
}

export default ContactScreen;
