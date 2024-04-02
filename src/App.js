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
      <img src={'/media/bg/main-bg.jpg'} className="main-bg" alt=""/>
      {/* <div
        className=""
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/media/illustrations/sketchy-1/14.png')`,
        }}
      ></div> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index  element={<Home />} />
          <Route path="investor" element={<Investor />} />
          <Route path="companies" element={<Companies />} />
          <Route path="gtlra" element={<Gtlra />} />
          <Route path="talent" element={<Talent />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
