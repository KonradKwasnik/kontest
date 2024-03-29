import React from 'react'

export default function GlobalTechsprintLeadership() {
  return (
    <div className='glob1'>
        <img src={process.env.PUBLIC_URL + '/media/bg/10.png'} className="custome-img" alt=""/>  
    <div className="container position-relative z-index-1">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 d-flex align-items-center" >
          <h1>
            <span className='text-white fw-bold'>The Global Techsprint Leadership Recruitment Agency (GTLRA) is leading the way in software development and innovation, delivering results in months, not years.</span>
            By providing a new collaborative marketplace and ecosystem JUUBIX supplies 'Stakeholders as as Service' (SaaS) and offers multiple Microservices for Talent, Companies, and Investors. We converge gamification, fintech, edtech and Web3 to create a talent and financial matching ecosystem. All users will be immersed to multi- cloud emerging technology services such as NFT's, Metaverse, and Blockchain products to create innovative new sources of revenue and income.
          </h1>
        </div>
        <div className="col-xl-4 col-lg-7 col-md-6 offset-xl-1" >
          <img src={process.env.PUBLIC_URL + '/media/img/glob.svg'} className="w-100 mt-6 mt-md-0" alt=""/>
        </div>
      </div>
    </div>
  </div>
  )
}
