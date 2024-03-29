import React from 'react'

export default function EmpowerOperations() {
  return (
    <div className='efficiency'>
        <div className="container position-relative z-index-1">
            <div className="row flex-md-row flex-column-reverse ">
                <div className="col-xl-6 col-lg-7 col-md-6  d-flex justify-content-center align-items-center" >
                    <img src={process.env.PUBLIC_URL + '/media/img/image-3.png'} className="w-xl-75 w-md-100 w-75 mt-10 mt-md-0 bg-white" alt=""/>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6 offset-xl-1 justify-content-center d-flex flex-column">
                  <div className="card">
                    <h1>Empower your<br/>  operations and finances</h1>

                    <p className='text-white'>Choose your profile: Talent, Company, or Investor.</p>
                    <p>Select your interests and sub-interests to gain your 1st degree matches. Select your skills and sub- skills for 2nd degree matches. Fill out questionnaire and specify your financial requirements.</p>
                    <p>JUUIX provides onboarding, accounting, payroll, and inventory management to streamline operations, saving you time and money.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
