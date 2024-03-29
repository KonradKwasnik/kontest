import React from 'react'

export default function UnbiasedPayment() {
  return (

    <div className='connect-matched-bids' id='connect-matched-bids'> 
        <img src={process.env.PUBLIC_URL + '/media/bg/16-2.png'} className="custome-img" alt=""/>   
        <div className="container position-relative z-index-1">
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 offset-xl-1 justify-content-center d-flex flex-column" >
                    <div className='d-flex align-items-end'>
                        <h1>The JUUBIX <br/> unbiased <br/> payment <br/> gateway!</h1>
                        <img src={process.env.PUBLIC_URL + '/media/img/swipe-right.svg'} className="img-fluid mb-16" alt=""/>

                    </div>
                    <p>
                    The future of digital matchmaking! The Web3 'Tinder' Ecosystem & Financial Marketplace.
                    <span className='badge badge-white text-dark rounded-pill'> Swipe right  → </span>
                    <spna style={{color: '#A6A6A6'}}> to unlock unlimited collaborative and financial opportunities! Matching Talent, Companies and Investors anonymously based on key interests, skills, and finance/funding needs in a Web3 gamification environment.</spna>
                    </p>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-6 offset-xl-1 d-flex justify-content-center" >
                    <img src={process.env.PUBLIC_URL + '/media/img/image-1.png'} className="w-75" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
