import React, { useEffect } from 'react'

export default function Investor() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  return (
    <>
      <div className='talent mb-20 pb-20'>
    {/* <div className="container"> */}
        <div className="row m-0">
            <div className="p-0 col-xl-4 col-lg-3 order-lg-0 order-1 d-flex align-items-center justify-content-center" >
                <img src={process.env.PUBLIC_URL + '/media/img/investor.svg'} className="" alt=""/>
            </div>
            <div className="col-lg-5 px-xl-18 col-lg-5 order-lg-1 order-0"  >
                <h1>INVESTORS</h1>
                <h2>Get ready for a new way to invest! Tired of having your funds stagnant for 3-4 years waiting for an ROI? Now, in real time investment can be moved to another matched opportunity</h2>
                <ul>
                    <li>Invest in early stage companies</li>
                    <li>Match and connect employees, customers, investors, suppliers and buyers.</li>
                    <li>Get real-time return on investment based on participation and effort tracking.</li>
                    <li>Visualise costing and equity overtime. </li>
                    <li>Co-collaborate and innovate.</li>
                </ul>
            </div>
            <div className="p-0 col-xl-2 col-lg-3 d-flex flex-column justify-content-end  p-10  order-3" >
              <img src={process.env.PUBLIC_URL + '/media/logo/GTLRA-logo.svg'} className="w-100" alt=""/>
              <a href='https://docs.google.com/forms/d/13pkN6pgL-Egrbx6OR1nnyVVB6HHSqPzgoD9HHHkXZOs/edit#responses' 
              className='btn btn-white w-100 mt-6 fw-bolder'>APPLY HERE</a>
            </div>
        </div>
      {/* </div> */}
      </div>


        
    </>
  )
}
