import React, { useEffect } from 'react'
import Navbar from '../common/Navbar'
import Services from './sections/Services'
import Brand from './sections/Brand'
import Pricing from './sections/Pricing'
import UnbiasedPayment from './sections/UnbiasedPayment'
import ConnectMatchedBids from './sections/ConnectMatchedBids'
import EmpowerOperations from './sections/EmpowerOperations'
import EfficiencyFingertips from './sections/EfficiencyFingertips'
import JuubixKeysToSuccess from './sections/JuubixKeysToSuccess'
import JuubixCoreValues from './sections/JuubixCoreValues'
import Hero from './sections/Hero'
import ImmersedTechnology from './sections/ImmersedTechnology'
import JuubixKeyFocus from './sections/JuubixKeyFocus'
import PaymentServices from './sections/PaymentServices'
import GlobalTechsprintLeadership from './sections/GlobalTechsprintLeadership'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  return (
    <>
    <Hero />
    <UnbiasedPayment />
    <ConnectMatchedBids />
    <EmpowerOperations />
    <EfficiencyFingertips />
    <ImmersedTechnology />
    <JuubixKeyFocus />
    <GlobalTechsprintLeadership />
    <Services />
    <PaymentServices />
    {/* <Pricing /> */}
    {/* <Brand /> */}
    <JuubixKeysToSuccess />
    <JuubixCoreValues />
    </>
  )
}
