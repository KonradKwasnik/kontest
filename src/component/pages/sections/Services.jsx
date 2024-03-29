import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Services() {
  return (
    <>
    <div className='services'>
        <img src={process.env.PUBLIC_URL + '/media/bg/4.png'} className="custome-img" alt=""/>  
        <div className="container position-relative z-index-1">
          <div className='d-flex justify-content-center'>
            <div className='col-lg-7 text-center' >
              <h1>JUUBIX TRIO OF APPS & SERVICES </h1>
              <h2>The Future of Work, Innovation and Leadership.</h2>
            </div>
          </div>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12 d-flex flex-column align-items-center mt-7">
                    <div className="overlayhovercontainer">
                        
                        <div className="overlayhovercontainer-overlay"></div>
                        <div className='h-lg-250px overlayhovercontainer-image'>
                            <img src={process.env.PUBLIC_URL + '/media/img/services-1.svg'} className="w-100" alt=""/>  
                            <p className='fs-8 text-white mb-0 mt-3'> GLOBAL TECHSPRINT LEADERSHIP RECRUITMENT AGENCY</p>
                        </div>
                        <div className="overlayhovercontainer-details fadeIn-bottom">
                            <h3 className="overlayhovercontainer-title">
                                GTLRA management service that governs the trio of applications to source and hire top talent tailored to your needs, manage and invest client portfolios across diverse markets, and facilitate strategic co-acquisitions with international partners.
                            </h3>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 d-flex flex-column align-items-center mt-7">
                    <div className="overlayhovercontainer">
                        
                        <div className="overlayhovercontainer-overlay"></div>
                        <div className='h-lg-250px overlayhovercontainer-image d-flex justify-content-center'>
                            <img src={process.env.PUBLIC_URL + '/media/img/services-2.svg'} alt=""/>  
                        </div>
                        <div className="overlayhovercontainer-details fadeIn-bottom">
                            <h3 className="overlayhovercontainer-title">
                                GTLRA management service that governs the trio of applications to source and hire top talent tailored to your needs, manage and invest client portfolios across diverse markets, and facilitate strategic co-acquisitions with international partners.
                            </h3>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 d-flex flex-column align-items-center mt-7">
                    <div className="overlayhovercontainer">
                        
                        <div className="overlayhovercontainer-overlay"></div>
                        <div className='h-lg-250px overlayhovercontainer-image d-flex justify-content-center'>
                            <img src={process.env.PUBLIC_URL + '/media/img/services-3.svg'} alt=""/>  
                        </div>
                        <div className="overlayhovercontainer-details fadeIn-bottom">
                            <h3 className="overlayhovercontainer-title">
                                GTLRA management service that governs the trio of applications to source and hire top talent tailored to your needs, manage and invest client portfolios across diverse markets, and facilitate strategic co-acquisitions with international partners.
                            </h3>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 d-flex flex-column align-items-center mt-7">
                    <div className="overlayhovercontainer">
                        
                        <div className="overlayhovercontainer-overlay"></div>
                        <div className='h-lg-250px overlayhovercontainer-image d-flex justify-content-center'>
                            <img src={process.env.PUBLIC_URL + '/media/img/services-4.svg'} alt=""/>  
                        </div>
                        <div className="overlayhovercontainer-details fadeIn-bottom">
                            <h3 className="overlayhovercontainer-title">
                                GTLRA management service that governs the trio of applications to source and hire top talent tailored to your needs, manage and invest client portfolios across diverse markets, and facilitate strategic co-acquisitions with international partners.
                            </h3>
                        </div>
                        
                    </div>
                </div>
                {/* <div className="col-md-3 col-6 d-flex flex-column align-items-center mt-7">
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                        <Tooltip id={`tooltip-top`}>
                        <span className='fs-3'>
                        GAMEOVER 3D tokenised multiplayer that combines elements of physics-based object manipulation, puzzle-solving, and timing challenges which Incentivises learning, skill based development, and collaboration, while rewarding users with financial benefits.
                        </span>
                        </Tooltip>
                        }
                        >
                        <Button className='bg-transparent p-0 m-0 bg-transparent'>
                            <img src={process.env.PUBLIC_URL + '/media/img/services-2.svg'} className="h-250px" alt=""/>
                        </Button>
                    
                    </OverlayTrigger>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column align-items-center mt-7">
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                        <Tooltip id={`tooltip-top`}>
                        <span className='fs-3'>
                        JUUBIX matching app: Connects Talent, Company, and Investor profile users based on skills, performance, and investment potential, fostering collaboration and fair access to opportunities
                        </span>
                        </Tooltip>
                        }
                        >
                        <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <img src={process.env.PUBLIC_URL + '/media/img/services-3.svg'} className="h-250px" alt=""/>  
                        </Button>
                    
                    </OverlayTrigger>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column align-items-center mt-7">
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                        <Tooltip id={`tooltip-top`}>
                        <span className='fs-3'>
                        GAMEOVER 3D tokenised multiplayer puzzle game: Incentivizes learning, skill development, and collaboration, while rewarding users with financial benefits.
                        </span>
                        </Tooltip>
                        }
                        >
                        <Button className='bg-transparent p-0 m-0 bg-transparent'>
                    <img src={process.env.PUBLIC_URL + '/media/img/services-4.svg'} className="h-250px" alt=""/>  
                        </Button>
                    
                    </OverlayTrigger>
                </div> */}
                <div className="col-md-3 col-6 d-flex flex-column  align-items-center mt-7"  >
                    <p className='text-white mt-10'> </p>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column  align-items-center mt-7"  >
                    <p className='text-white mt-10'> </p>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-3 col-6 d-flex flex-column  align-items-center mt-7"  >
                  <div className='h-250px'>
                    <img src={process.env.PUBLIC_URL + '/media/img/services-1.svg'} className="w-100" alt=""/>  
                    <p className='fs-10 text-white mb-0 mt-3'> GLOBAL TECHSPRINT LEADERSHIP RECRUITMENT AGENCY</p>
                  </div>
                    <p className='text-white mt-10'> GTLRA management service that governs the trio of applications to source and hire top talent tailored to your needs, manage and invest client portfolios across diverse markets, and facilitate strategic co-acquisitions with international partners. </p>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column  align-items-center mt-7"  >
                    <img src={process.env.PUBLIC_URL + '/media/img/services-2.svg'} className="h-250px" alt=""/>  
                    <p className='text-white mt-10'>GAMEOVER 3D tokenised multiplayer that combines elements of physics-based object manipulation, puzzle-solving, and timing challenges which Incentivises learning, skill based development, and collaboration, while rewarding users with financial benefits.</p>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column  align-items-center mt-7"  >
                    <img src={process.env.PUBLIC_URL + '/media/img/services-3.svg'} className="h-250px" alt=""/>  
                    <p className='text-white mt-10'> JUUBIX matching app: Connects Talent, Company, and Investor profile users based on skills, performance, and investment potential, fostering collaboration and fair access to opportunities</p>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column  align-items-center mt-7"  >
                    <img src={process.env.PUBLIC_URL + '/media/img/services-4.svg'} className="h-250px" alt=""/>  
                    <p className='text-white mt-10'>GAMEOVER 3D tokenised multiplayer puzzle game: Incentivizes learning, skill development, and collaboration, while rewarding users with financial benefits. </p>
                </div>
            </div> */}
        </div>
    </div>

    
    </>
  )
}
