import React from 'react'

export default function ConnectMatchedBids() {
  return (
    <div className='connect-matched-bids'>
        <img src={process.env.PUBLIC_URL + '/media/bg/17.png'} className="custome-img" alt=""/>  
        <div className="container position-relative z-index-1">
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 offset-xl-1 justify-content-center d-flex flex-column" >
                    <h1>Connect in <br/> real time to matched bids!</h1>
                    <ul>
                        <li>Connect in real-time with matched bids: Find the perfect match for your needs, whether it's talent, funding, or resources.</li>
                        <li>Leverage remote channels: Collaborate seamlessly with individuals and organizations worldwide using our secure platform.</li>
                        <li>Unlock value-based incentives: Participate in JUUBIX's innovative metric system, offering equity rewards to investors and companies in the Web3 ecosystem.</li>
                    </ul>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-6 offset-xl-1 d-flex justify-content-center" >
                    <img src={process.env.PUBLIC_URL + '/media/img/image-2.png'} className="w-75" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
