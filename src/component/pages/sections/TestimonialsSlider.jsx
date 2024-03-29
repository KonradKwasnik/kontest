import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function TestimonialsSlider() {
    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
    <>
    
    
    <Slider {...settings} className='main-slider'>
      <div>
        <div className='slides'></div>
      </div>
      <div>
        <div className='slides'></div>
      </div>
      <div>
        <div className='slides'></div>
      </div>
      <div>
        <div className='slides'></div>
      </div>
      <div>
        <div className='slides'></div>
      </div>
      <div>
        <div className='slides'></div>
      </div>
    </Slider>
    </>
  )
}
