import React from 'react'

export default function EfficiencyFingertips() {
  return (
    <div className='efficiency'>
        <div className="container position-relative z-index-1">
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 offset-xl-1 justify-content-center d-flex flex-column">
                  <div className="card">
                    <h1>Efficiency at<br/> your<br/> fingertips </h1>

                    <p className='text-white'>Connect in real-time to matched bids! Streamlining decision-making in task-based payment networks through advanced Al.</p>
                    <p>JUUBIX's value based metric system offers visual equity incentives to individuals in society and businesses to invest and immerse in Web3. </p>
                    <p>JUUBIX implements machine learning and predictive modelling, to provide automated decision making based on task based payments within the matched pooled networks.</p>
                    <p>Now bid for goods and services based on participation!</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-6 offset-xl-1 d-flex justify-content-center align-items-center" >
                    <img src={process.env.PUBLIC_URL + '/media/img/image-4.png'} className="w-xl-75 w-md-100 w-75 mt-10 mt-md-0 bg-white" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
