import '../styles/home.css'

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
          <li>T</li>
          <li>G</li>
          <li>L</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeScreen;
