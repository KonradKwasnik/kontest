import React from 'react'

export default function Brand() {
  return (
    <div className='brand'>
          <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img w-100px w-lg-auto" alt=""/> 
          <img src={process.env.PUBLIC_URL + '/media/bg/particals-right.svg'} className="particals-right-img w-100px w-lg-auto" alt=""/>  
          <div className="container position-relative z-index-1" >
            <h1 className='text-center mb-15'>Collaborative/ Cloud/ Crowdfunding Platforms</h1>
            <div className="d-flex justify-content-between align-items-center">
              <h1>Task Management</h1>
              <img src={process.env.PUBLIC_URL + '/media/img/brand.svg'} className="w-50" alt=""/>
              <h1>Fintech Services</h1>
            </div>
            <h1 className='text-center mt-15'>Freelance Services </h1>
            
          </div>
        </div>
  )
}
