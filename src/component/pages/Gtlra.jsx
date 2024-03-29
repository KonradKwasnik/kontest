import React, { useEffect } from 'react'
import TestimonialsSlider from './sections/TestimonialsSlider';
import Agency from './sections/Agency';
import SprintYourWayToSuccess from './sections/SprintYourWayToSuccess';
import FutureInnovation from './sections/FutureInnovation';
import Testimonials from './sections/Testimonials';
import TechsprintLeadershipRecruitmentAgency from './sections/TechsprintLeadershipRecruitmentAgency';
import WhyGTLRA from './sections/WhyGTLRA';

export default function Gtlra() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <>
    <SprintYourWayToSuccess />
    <TechsprintLeadershipRecruitmentAgency />
    <Agency />
    <WhyGTLRA />
    {/* <FutureInnovation /> */}
    <Testimonials />
    </>
  )
}
