import React from 'react'

export default function Hero() {
  return (
    <div className="hero">
        <img src={process.env.PUBLIC_URL + '/media/bg/h-bg.png'} className="custome-img" alt=""/>   
        <div className="container position-relative z-index-1">
            <h1 data-aos-duration="1500" data-aos="fade-down">THE NEXT-GEN<br/> SOLUTION IS<br /> HERE!</h1>
            <h2 data-aos-duration="1500" data-aos="fade-right">MATCH. CONNECT. INVEST.</h2>
            <h3 data-aos-duration="1500" data-aos="fade-up">UNLOCK THE VAULT OF UNLIMITED OPPORTUNITIES</h3>

            <a href='#connect-matched-bids' className='justify-content-center align-items-center d-flex flex-column mt-20 bounce'>
                <p className='text-white fs-3 mb-0'>DISCOVER MORE</p>
                <i className="fa fa-sort-desc fs-1 text-white" aria-hidden="true"></i>
            </a>
            {/* <div className="d-flex justify-content-end">
                <button className='btn btn-white w-250px fw-bolder' >APPLY HERE</button>
            </div> */}
        </div>
    </div>
  )
}
