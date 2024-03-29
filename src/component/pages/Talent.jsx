import React, { useEffect } from 'react'

export default function Talent() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  return (
    <>
   
   <div className='talent mb-20 pb-20'>
    {/* <div className="container"> */}
        <div className="row m-0">
            <div className="p-0 col-xl-4 col-lg-3 order-lg-0 order-1 d-flex align-items-center" >
                <img src={process.env.PUBLIC_URL + '/media/img/edu.svg'} className="w-100" alt=""/>
            </div>
            <div className="col-lg-5 px-xl-18 col-lg-5 order-lg-1 order-0" >
                <h1>TALENT/EDUCATIONAL INSTISTUTIONS</h1>
                <h2> Choose which skills you would like to deliver, shadow, collaborate and recruit. Be a a multidisciplinary expert and participate in a portfolio of projects and companies globally.</h2>
                <ul>
                    <li>Get paid for your skills</li>
                    <li>Collaborate peer to peer</li>
                    <li>Control your salary</li>
                    <li>Flexible working hours</li>
                    <li>Participate in multiple projects</li>
                    <li>Match and connect talent, staff, and departments based on shared interests</li>
                    <li>Freelance work opportunities GRA APPLY HERE</li>
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
