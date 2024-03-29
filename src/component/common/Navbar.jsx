import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  const [isClassToggled, setIsClassToggled] = useState(false);
  const [isClassFixed, setIsClassFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsClassFixed(true);
      } else {
        setIsClassFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsClassToggled(prevState => !prevState);
  };
    return (
      <>
      <div className={`main-header z-index-3 w-100 ${
          isClassFixed ? 'is-scrolled pt-0' : 'pt-15'
        }`}>
        <div className="container d-flex justify-content-between align-items-center h-100">
        {/* <div className="logo">LOGO</div> */}
        <Link to={"/"}>
        <img src={process.env.PUBLIC_URL+ "/media/logo/logo.svg"} className="img-fluid logo h-50px"/>
        </Link>
        <div className='d-flex align-items-center gap-4 gap-xl-0'>
            <div className="menu d-none d-xl-block">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/gtlra"}>gtlra</Link></li>
                    <li><Link to={"/investor"}>investors</Link></li>
                    <li><Link to={"/companies"}>companies</Link></li>
                    <li><Link to={"/talent"}>talent</Link></li>
                </ul>
            </div>
            <Link to={"/pricing"} className='d-none d-md-flex'> <button className='btn btn-orange fs-3 ms-2 fw-bold '>Start 30-day free trial</button> </Link>
            {/* <form action="" className='h-40px bg-white rounded-1 d-flex align-items-center ms-15 p-1 w-350px d-none d-md-flex'>
                <input type="text" placeholder='__'  className='h-100 form-control border border-dark rounded-0'/>
                <div className='h-100 w-1px bg-dark mx-1'></div>
                <i className="fa fa-search text-dark m-1 mx-1 fs-2" aria-hidden="true"></i>
            </form> */}
            <i  onClick={handleClick} className="fa fa-bars fs-1 mobile-menu-btn d-block d-xl-none" aria-hidden="true"></i>
        </div>
        </div>
      </div>

      {/* ==================== Mobile menu ==================== */}
      <div className={`mobile-menu ${isClassToggled ? 'mobile-menu-visible' : ''}`}>
      <div className="close-btn" onClick={handleClick}><i className="fa fa-times"></i></div>
      <div className="nav-logo">
        <Link to={"/"} className="h-100">
        <img src={process.env.PUBLIC_URL+ "/media/logo/logo.svg"} alt="" title="" className="h-60px"/>
          </Link>
      </div>
      
      {/* <form action="" className='h-40px bg-white rounded-1 d-flex align-items-center ms-5 mb-10 p-1 w-100 d-block d-md-none'>
            <input type="text" placeholder='__'  className='h-100 form-control border border-dark rounded-0'/>
            <div className='h-100 w-1px bg-dark mx-1'></div>
            <i className="fa fa-search text-dark m-1 mx-1 fs-2" aria-hidden="true"></i>
        </form> */}
      <div className="menu-outer">
        <ul className="navigation">
          <li><Link className="section-link" onClick={handleClick} to={"/"}>Home</Link></li>
          <li><Link className="section-link" onClick={handleClick} to={"/gtlra"}>gtlra</Link></li>
          <li><Link className="section-link" onClick={handleClick} to={"/investor"}>investors</Link></li>
          <li><Link className="section-link" onClick={handleClick} to={"/companies"}>companies</Link></li>
          <li><Link className="section-link" onClick={handleClick} to={"/talent"}>talent</Link></li>
        </ul>
      </div>
      <Link to={"/pricing"} className='d-flex ms-6 d-md-none'> <button className='btn btn-orange fs-3 ms-2 fw-bold w-100'>Start 30-day free trial</button> </Link>
      </div>
      <Outlet />
      </>
    );
  }
  
  export default Navbar;