import HomeScreen from "./screens/home";
// import AboutScreen from './screens/about';
import './styles/index.css'
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
