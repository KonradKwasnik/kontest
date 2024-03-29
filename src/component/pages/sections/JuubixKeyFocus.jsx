import React from 'react'

export default function JuubixKeyFocus() {
  return (
    <div className='efficiency'>
        <div className="container position-relative z-index-1">
            <div className="row">
                
            <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 justify-content-center d-flex flex-column position-relative z-index-2" >
                    <img src={process.env.PUBLIC_URL + '/media/img/social.svg'} className="w-100 mb-15 mb-lg-0" alt=""/>
                </div>

                <div className="col-xl-4 col-lg-7 col-md-6 offset-xl-1 d-flex justify-content-center" data-aos-duration="1500" data-aos="flip-right">
                  <div className="card bg-gradient">

                    <p className='text-white fw-bold fs-4'>Seven out of the top 10 largest companies in the world are in technology. Technology is a catalyst that propels new ideas & innovations. JUUBIX empowers diverse minds to collaborate, learn, and create through a gamified, decentralised ecosystem.</p>
                    <h2>JUUBIX KEY FOCUS:</h2>
                    <ul>
                      <li>Igniting inclusive innovation through liquid networks and diversified collaboration.</li>
                      <li>Accelerating supply chain efficiency with Web3-powered transparency and automation.</li>
                      <li>Revolutionising R&D with gamified learning and skill-building incentives.</li>
                      <li>Transforming labour markets with decentralised opportunities and skill-based rewards.</li>
                    </ul>
                  </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
