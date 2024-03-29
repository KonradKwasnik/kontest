import React from 'react'
import Slider from 'react-slick';

export default function PaymentServices() {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
      // centerMode: true,
      // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 763,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <div className='services'>
        <img src={process.env.PUBLIC_URL + '/media/bg/5.png'} className="custome-img" alt=""/>  
        <div className="container position-relative z-index-1">
          <div className='d-flex justify-content-center'>
            <div className='col-lg-7 text-center' >
              <h2>Access multiple cloud payment services.</h2>
              <h1>CHANGE THE WAY YOU PAY! </h1>
            </div>
          </div>
            <div className="row mt-5">
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Make payments</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Matched with funded networks</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Bidding system</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'>Voting rights</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Recieve payments</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Check reputation status</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Facilitate smart contracts</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center mt-10 gap-5">
                    <img src={process.env.PUBLIC_URL + '/media/img/check.svg'} className="w-xl-75px w-lg-60px w-md-50px w-30px" alt=""/>
                    <p className='fs-4 mb-0 text-start'> Control investment</p>
                </div>
            </div>
            
            <div className="row mt-sm-15">
            <Slider {...settings} className=''>
            <div className='d-flex justify-content-center'>
              <img src={process.env.PUBLIC_URL + '/media/img/microsoft.svg'} className="h-xl-150px h-auto w-100" alt=""/>  
            </div>
            <div className='d-flex justify-content-center'>
                    <img src={process.env.PUBLIC_URL + '/media/img/metaMask.svg'} className="h-xl-150px h-auto w-100" alt=""/>  
            </div>
            <div className='d-flex justify-content-center'>
                    <img src={process.env.PUBLIC_URL + '/media/img/stripe.svg'} className="h-xl-150px h-auto w-100" alt=""/>  
            </div>
            <div className='d-flex justify-content-center'> 
                    <img src={process.env.PUBLIC_URL + '/media/img/revolut.svg'} className="h-xl-150px h-auto w-100" alt=""/>  
            </div>
          </Slider>
            </div>
        </div>
    </div>
  )
}
