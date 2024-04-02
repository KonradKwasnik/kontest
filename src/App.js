import { useEffect } from 'react';
import './App.css';
import Home from './component/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/pages/Layout';
import NotFound from './component/pages/NotFound';
import Navbar from './component/common/Navbar';
import Companies from './component/pages/Companies';
import Gtlra from './component/pages/Gtlra';
import Talent from './component/pages/Talent';
import Investor from './component/pages/Investor';
import Footer from './component/common/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from './component/pages/sections/Pricing';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
