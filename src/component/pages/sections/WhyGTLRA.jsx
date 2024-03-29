import React from 'react'

export default function WhyGTLRA() {
  return (
    <div className='sprint why-gtlara'>
          <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img w-100px w-lg-auto" alt=""/> 
          <img src={process.env.PUBLIC_URL + '/media/bg/particals-right.svg'} className="particals-right-img w-100px w-lg-auto" alt=""/>  
          <img src={process.env.PUBLIC_URL + '/media/bg/9.png'} className="custome-img img-fit-contain" alt=""/>  
      <div className="container position-relative z-index-1" >
         <h1 className='fw-600'>WHY THE <br/> GTLRA?</h1>
              {/*  <h2>EDTE WELCOME TO THE FUTURE OF WORK, INNOVATION & LEADERSHIP.</h2> */}
      </div>
    </div>
  )
}
