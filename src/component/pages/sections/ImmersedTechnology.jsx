import React from 'react'

export default function ImmersedTechnology() {
  return (
    <div className='efficiency'>
        <img src={process.env.PUBLIC_URL + '/media/bg/3.png'} className="custome-img" alt=""/>  
        <div className="container position-relative z-index-1">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 justify-content-center d-flex flex-column position-relative z-index-2" >
                  
                    <img src={process.env.PUBLIC_URL + '/media/img/gear.svg'} className="gear-img position-absolute" alt=""/>
                    <h1 className='mb-3'>IMMERSED  <br/> TECHNOLOGY </h1>

                    <p className='text-white'> JUUBIX utilises cutting-edge technology to create a robust, secure, and automated ecosystem for collaboration. We leverage Al and blockchain to ensure:</p>
                    <ul>
                      <li className='text-white'>Seamless and secure transactions: Your data and financial activities are protected through blockchain technology.</li>
                      <li className='text-white'>Automated matching and decision-making: Al assists in finding the perfect match for your needs, streamlining the process.</li>
                      <li className='text-white'>Data-driven insights: We analyse anonymised data to continuously improve the platform and discover valuable trends.</li>
                    </ul>
                    

                </div>
                <div className="col-xl-5 col-lg-7 col-md-6 offset-xl-1 d-flex justify-content-center" >
                    <img src={process.env.PUBLIC_URL + '/media/img/technology.svg'} className="w-100 imm-img" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
