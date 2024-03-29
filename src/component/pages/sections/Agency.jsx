import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Slider from "react-slick";

export default function Agency() {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
      // centerMode: true,
      // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
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
    <>

    <div className='agency'>
        <img src={process.env.PUBLIC_URL + '/media/bg/bg.png'} className="right-img-bg" alt=""/> 
        <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img w-100px w-lg-auto" alt=""/> 
        <img src={process.env.PUBLIC_URL + '/media/bg/particals-right.svg'} className="particals-right-img w-100px w-lg-auto" alt=""/>  
        <div className="container position-relative z-index-1">
        <h1 className='title fw-600' >OUR <br />AGENCY</h1>
          <div className="d-flex justify-content-between gap-lg-20 gap-4 mt-20 pt-10 list">
            <OverlayTrigger
                key={'top'}
                placement={'top'}
                overlay={
                <Tooltip id={`tooltip-top`}>
                  <span className='fs-3'>Applications Open to Everybody - Fill out online application form. Deadline 8th April 2024. </span>
                </Tooltip>
                }
                >
                <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <h2 data-aos-delay="300" >RECRUIMENT</h2>
                </Button>
            
            </OverlayTrigger>
            <OverlayTrigger
                key={'top'}
                placement={'top'}
                overlay={
                <Tooltip id={`tooltip-top`}>
                  <span className='fs-3'>Interview/Screening process for Companies + Talent participants. 8th May – 10th June 2024. <br /> <br />
                  Introduction to projects/ teams. June 10th – July 8th 2024
                  </span>
                </Tooltip>
                }
                >
                <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <h2 data-aos-delay="600">ONBOARDING</h2>
                </Button>
            
            </OverlayTrigger>
            <OverlayTrigger
                key={'top'}
                placement={'top'}
                overlay={
                <Tooltip id={`tooltip-top`}>
                  <span className='fs-3'>
                  GTLRA activates Techsprint July 8th 2024 – October 11th 2024 – October 11th – January 10th 2025. 
                  </span>
                </Tooltip>
                }
                >
                <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <h2 data-aos-delay="900" >3-6MTHS TECHSPRINT</h2>
                </Button>
            
            </OverlayTrigger>
            <OverlayTrigger
                key={'top'}
                placement={'top'}
                overlay={
                <Tooltip id={`tooltip-top`}>
                  <span className='fs-3'>
                  Companies Hire - selected shortlisted talent candidates.  
                  </span>
                </Tooltip>
                }
                >
                <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <h2 data-aos-delay="1200" >HIRING</h2>
                </Button>
            
            </OverlayTrigger>
            <OverlayTrigger
                key={'top'}
                placement={'top'}
                overlay={
                <Tooltip id={`tooltip-top`}>
                  <span className='fs-3'>
                  Payments/ Investments are made via smart contract.  
                  </span>
                </Tooltip>
                }
                >
                <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <h2 data-aos-delay="1500" >PAYMENTS</h2>
                </Button>
            
            </OverlayTrigger>
          </div>


            <img src={process.env.PUBLIC_URL + '/media/img/agency.svg'} className="agency-img" alt=""/>
        </div>
        <div className="break-line"></div>
        <div className="container position-relative z-index-1">    
        <div className="col-lg-10 offset-lg-1">
          <Slider {...settings} className=''>
            <div className='d-flex justify-content-center'>
              <img src={process.env.PUBLIC_URL + '/media/img/amazon.svg'}   alt=""/>
            </div>
            <div className='d-flex justify-content-center'>
              <img src={process.env.PUBLIC_URL + '/media/img/azure.svg'}   alt=""/>
            </div>
            <div className='d-flex justify-content-center'>
              <img src={process.env.PUBLIC_URL + '/media/img/github.svg'}   alt=""/>
            </div>
          </Slider>
          </div>          
        </div>
      </div>

    </>
  )
}
