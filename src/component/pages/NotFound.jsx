import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='testimonials'>
      <div className="container d-flex flex-column justify-content-center" style={{minHeight: '64vh'}}>
        <h1 className='text-center mb-15'>N<img src={process.env.PUBLIC_URL + '/media/img/track.svg'} className="w-90px" style={{marginTop: '-15px'}} alt=""/>t 
        F<img src={process.env.PUBLIC_URL + '/media/img/track.svg'} className="w-90px" style={{marginTop: '-15px'}} alt=""/>und</h1>
         <Link to={'/'}><h2>Back to Home</h2></Link> 
      </div>
    </div>
  )
}
