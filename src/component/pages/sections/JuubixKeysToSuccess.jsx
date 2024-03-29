import React from 'react'

export default function JuubixKeysToSuccess() {
  return (
    <div className='flow'>
        <img src={process.env.PUBLIC_URL + '/media/bg/21.png'} className="custome-img" style={{top: '-50px'}} alt=""/>  
    <div className="container position-relative z-index-1">
      <h1 >JUUBIX KEYS TO SUCCESS:</h1>
      {/* <div className='d-flex justify-content-center' >
        <img src={process.env.PUBLIC_URL + '/media/img/flow-1.png'} className="w-50" alt=""/>
      </div> */}
       <div className="d-flex justify-content-center">
        <div className="row col-xl-7 col-lg-10 mt-sm-20 py-15">
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>OPEN INNOVATION AGGREGATION SYSTEM</h2></div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>CORPORATE LICENSING</h2></div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>GAMIFIED DESIGN & FUNCTIONALITY</h2></div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>PUBLIC ENGAGEMENT</h2></div>
          </div>
        </div>
       </div>
    </div>
  </div>
  )
}
