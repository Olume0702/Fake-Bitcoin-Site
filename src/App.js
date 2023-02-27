import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <About/>
      <Navbar/> */}

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
