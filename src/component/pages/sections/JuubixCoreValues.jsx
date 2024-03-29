import React from 'react'

export default function JuubixCoreValues() {
  return (
    <div className='flow'>
        <img src={process.env.PUBLIC_URL + '/media/bg/22.png'} className="custome-img img-fit-contain" style={{top: '-30px'}} alt=""/>  
    <div className="container position-relative z-index-1">
      <h1 >JUUBIX - CORE VALUES</h1>
      {/* <div className='d-flex justify-content-center' >
        <img src={process.env.PUBLIC_URL + '/media/img/flow-2.png'} className="w-50" alt=""/>
      </div> */}
      <div className="d-flex justify-content-center">
        <div className="row col-xl-10 col-lg-12 mt-sm-20 py-15">
          <div className="col-lg-2 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>Transparent</h2></div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>RESPONSIVE</h2></div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>INNOVATION</h2></div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>COLLABORATIVE</h2></div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>KINETIC</h2></div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-6 mt-3">
            <div className="flow-item"><h2>SYSTEM</h2></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
