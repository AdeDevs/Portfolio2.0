// import HomeScreen from "./screens/home";
// import AboutScreen from './screens/about';
import './styles/index.css'
import { Routes, Route } from "react-router-dom";
import FauxHome from './screens/testtwo';
import FauxAbout from './screens/testone';
import NavBar from './screens/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<FauxHome />}></Route>
        <Route path='about' element={<FauxAbout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
