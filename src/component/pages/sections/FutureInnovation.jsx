import React from 'react'

export default function FutureInnovation() {
  return (
    <div className='innovation'>
        <img src={process.env.PUBLIC_URL + '/media/bg/bg.png'} className="right-img-bg" alt=""/> 
        <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img w-100px w-lg-auto" alt=""/> 
        <img src={process.env.PUBLIC_URL + '/media/bg/particals-right.svg'} className="particals-right-img w-100px w-lg-auto" alt=""/>  
        <div className="container position-relative z-index-1">
          <div className="row">
            <div className="col-md-3" >
              <h1>EMPOWER THE FUTURE OF INNOVATION WITH GTLRA:</h1>
                <img src={process.env.PUBLIC_URL + '/media/img/mind.svg'} className="" alt=""/>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center" >
                <img src={process.env.PUBLIC_URL + '/media/img/web.svg'} className="w-75" alt=""/>
              <h2>Today's Sprinter, Tomorrow's Leader.</h2>
            </div>
            <div className="col-md-3 d-flex align-items-end" >
              <h3> Enterprise pricing at an exceptional value with a flat rate of $15,000 per product/service over a 1-month talent batch period.</h3>
            </div>
          </div>
        </div>
      </div>
  )
}
