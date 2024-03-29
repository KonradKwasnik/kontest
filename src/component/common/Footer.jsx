import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    
    <footer className='footer'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-4 text-center text-lg-start'>
              <h1>MATCH. CONNECT. INVEST.</h1>
              <h2>UNLOCK THE VAULT OF UNLIMITED OPPORTUNITIES</h2>
            </div>
            <div className='col-lg-8 d-flex justify-content-center ps-lg-10'>
            <ul className='m-0 p-0 d-flex justify-content-center justify-content-lg-start flex-wrap mt-10 mt-lg-0 link-list'>
              <li>Terms of Use</li>
              <li>Disclaimer</li>
              <li>Partners</li>
              <li>Privacy Notice</li>
              <li>FAQ's</li>
              <li>Pitchdeck</li>
              <li>1 Pager</li>
              <li>Cookies</li>
              <li>Contact Us</li>
            </ul>
            {/* <table>
              <tbody>
                <tr>
                <td>Terms of Use</td>
                  <td>Disclaimer</td>
                  <td>Partners</td>
                  <td>Privacy Notice</td>
                  <td>FAQ's</td>
                  <td>Pitchdeck</td>
                  <td>1 Pager</td>
                  <td>Cookies</td>
                  <td>Contact Us</td>
                </tr>
              </tbody>
            </table> */}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-md-between my-6 gap-6 flex-wrap justify-content-center">
            <Link to={"/#"}> <img src={process.env.PUBLIC_URL + '/media/logo/logo-gray.svg'} className="h-60px h-sm-auto" alt=""/></Link>
            <ul className='social m-0 p-0 d-flex justify-content-center flex-wrap'>
              <li><a href="https://www.instagram.com/juubixworldwide/"><img src={process.env.PUBLIC_URL + '/media/img/instagram.svg'} className="" alt=""/></a></li>
              <li><a href="https://www.facebook.com/JUUBIX/followers"><img src={process.env.PUBLIC_URL + '/media/img/FB.svg'} className="" alt=""/></a></li>
              <li><a href="https://twitter.com/JUUBIX2"><img src={process.env.PUBLIC_URL + '/media/img/twit.svg'} className="" alt=""/></a></li>
              <li><a href="https://www.linkedin.com/company/juubix/"><img src={process.env.PUBLIC_URL + '/media/img/in.svg'} className="" alt=""/></a></li>
              <li><a href="https://www.tiktok.com/@juubixworldwide"><img src={process.env.PUBLIC_URL + '/media/img/tiktok.svg'} className="" alt=""/></a></li>
              <li><a href="https://chat.whatsapp.com/Bt7TdKUJRSF5TfHNGfr8xD"><img src={process.env.PUBLIC_URL + '/media/img/whatsapp.svg'} className="" alt=""/></a></li>
              <li><a href="https://www.youtube.com/@juubixworldwide"><img src={process.env.PUBLIC_URL + '/media/img/youtube-logo.png'} className="" alt=""/></a></li>
            </ul>
          </div>
            <h3><span>© </span>2024 JUUBIX ALL COPYRIGHTS RESERVED</h3>
        </div>
      </footer>
    </>
  )
}
