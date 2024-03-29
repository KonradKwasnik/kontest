import React, { useEffect, useState } from 'react'

export default function SprintYourWayToSuccess() {
    const [isClassHide, setIsClassHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsClassHide(true);
      } else {
        setIsClassHide(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    
    <div className='sprint'>
        {/* <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img" alt=""/>  */}
        <img src={process.env.PUBLIC_URL + '/media/bg/bg.png'} className="right-img-bg" alt=""/> 
        <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img w-100px w-lg-auto" alt=""/> 
        <img src={process.env.PUBLIC_URL + '/media/bg/particals-right.svg'} className="particals-right-img w-100px w-lg-auto" alt=""/>  
        <img src={process.env.PUBLIC_URL + '/media/bg/8.png'} className={`custome-img img-fit-contain custome-img-mb hideee   ${
          isClassHide ? 'fadeOut' : 'd-block'
        }`} alt=""/> 
        <div className="container position-relative z-index-1">
          <div className="row">
            <div className="col-lg-7" >
              <h1>SPRINT YOUR<br/> WAY TO <br/> SUCCESS</h1>
              <h2 className='mt-20 mt-sm-0'>WELCOME TO THE FUTURE OF WORK, INNOVATION & LEADERSHIP.</h2>
            </div>
            <div className="col-lg-4">
              <p className='text-white mt-13' >  JOIN OUR GLOBAL TECHSPRINT LEADERSHIP RECRUITMENT AGENCY (GTLRA)- AND SPRINT YOUR WAY TO SUCCESS WITH OUR INCLUSIVE DIVERSE MANAGED SERVICE AND FRAMEWORK. THE FUTURE OF WORK, INNOVATION AND LEADERSHIP IS AT YOUR FINGERTIPS!</p>
              
              <div className="p-0 d-flex flex-column justify-content-end align-items-center align-items-sm-end mt-sm-20 mt-6" >
                  <div className='w-275px'>
                    <img src={process.env.PUBLIC_URL + '/media/logo/GTLRA-logo.svg'} className="w-100 mt-14" alt=""/>
              <a href='https://docs.google.com/forms/d/13pkN6pgL-Egrbx6OR1nnyVVB6HHSqPzgoD9HHHkXZOs/edit#responses' 
              className='btn btn-white w-100 mt-6 fw-bolder'>APPLY HERE</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
