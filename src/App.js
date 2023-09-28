import HomeScreen from "./screens/home";
import AboutScreen from './screens/about';
import './styles/index.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './screens/navbar';
import ErrorBoundary from './screens/boundary';
import Portfolio from "./screens/portfolio";
import ContactScreen from "./screens/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='about' element={<AboutScreen />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='contact' element={<ContactScreen />}></Route>
        <Route path='*' element={<ErrorBoundary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
