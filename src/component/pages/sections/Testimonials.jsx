import React from 'react'
import TestimonialsSlider from './TestimonialsSlider'

export default function Testimonials() {
  return (
    <div className='testimonials'>
          <img src={process.env.PUBLIC_URL + '/media/bg/particals-left.svg'} className="particals-left-img w-100px w-lg-auto" alt=""/> 
          <img src={process.env.PUBLIC_URL + '/media/bg/particals-right.svg'} className="particals-right-img w-100px w-lg-auto" alt=""/>  
      <div className="container position-relative z-index-1" >
        <h2>WE HAVE SUCCESSFULLY HAD 100% RETENTION GLOBALLY FROM GTLRA PARTICIPANTS!</h2>
        <h1 className='text-center mb-15'>testim<img src={process.env.PUBLIC_URL + '/media/img/track.svg'} className="w-90px" style={{marginTop: '-15px'}} alt=""/>nials</h1>
      </div>
      <div className="break-line mb-20"></div>
      <TestimonialsSlider />
      <div className="break-line"></div>
    </div>
  )
}
