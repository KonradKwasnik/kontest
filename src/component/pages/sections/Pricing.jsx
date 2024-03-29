import React from 'react'

export default function Pricing() {
  return (
    
    <div className='plans'>
    <div className="container position-relative z-index-1">
      <div className='d-flex justify-content-center flex-column align-items-center' >
        <h1><span style={{color: '#0081FE'}}>Flexible</span> Plans</h1>
        <h2>Unlock even more opportunities!</h2>
      </div>
      <div className="row col-lg-10 offset-lg-1">
      <div className='col-12 d-flex justify-content-end'>
        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
          <label className="form-check-label"><h3 className='my-10 text-white me-4'>Monthly</h3></label>
          <input className="form-check-input h-35px w-80px shadow-lg" type="checkbox" value="" name="notifications" />
        </div>
      </div>
        <div className="col-md-4 mb-10 col-sm-6" >
          <div className="plan-card">
            <img src={process.env.PUBLIC_URL + '/media/bg/gradient-bg2.svg'} className="img" alt=""/>
            <div className='position-relative z-index-1'>
              <div className="plan-header">Entry Access</div>
              <div className="plan-body">
                <h3>£10</h3>
                <ul>
                  <li>Up to 20 matches</li>
                  <li>Access JUUBIX App</li>
                  <li>Access to Game</li>
                  <li>Access to JU-MEET (Max: 3rooms)</li>
                  <li>Maximum 30mins meeting</li>
                  <li>File Storage</li>
                  <li>Mapping</li>
                  <li>Calendar</li>
                  <li>Notes</li>
                </ul>
              </div>
              <div className="plan-footer">Start 30-day free trial </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-10 col-sm-6" >
          <div className="plan-card">
            <img src={process.env.PUBLIC_URL + '/media/bg/gradient-bg2.svg'} className="img" alt=""/>
            <div className='position-relative z-index-1'>
              <div className="plan-header" style={{background: '#2887BF'}}>Member Access</div>
              <div className="plan-body">
                <h3>£30</h3>
                <ul>
                  <li>Unlimited matches</li>
                  <li>Access JUUBIX App</li>
                  <li>Access to Game</li>
                  <li>Access to JU-MEET (All rooms)</li>
                  <li>Unlimited meeting time</li>
                  <li>File Storage</li>
                  <li>Mapping</li>
                  <li>Calendar</li>
                  <li>Notes</li>
                </ul>
              </div>
              <div className="plan-footer">Start 30-day free trial </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-10" >
          <div className="plan-card">
            <img src={process.env.PUBLIC_URL + '/media/bg/gradient-bg2.svg'} className="img" alt=""/>
            <div className='position-relative z-index-1'>
              <div className="plan-header">Enterprise</div>
              <div className="plan-body">
                <h3>£15K</h3>
                <ul>
                  <li>Management Managed Service</li>
                  <li>White Label</li>
                  <li>Recruiting, Screening and Hire.</li>
                  <li>Access to Microservices</li>
                  <li>Access to AWS and Azure Cloud</li>
                  <li>Unlimited meeting time</li>
                  <li>File Storage</li>
                  <li>Mapping</li>
                  <li>Calendar</li>
                  <li>Notes</li>
                </ul>
              </div>
              <div className="plan-footer">Start 30-day free trial </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
