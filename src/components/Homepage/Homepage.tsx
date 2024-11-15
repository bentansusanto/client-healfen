'use client'
import React from 'react'
import Herosection from './Section/Herosection'
import ProblemSection from './Section/ProblemSection'
import WhyChooseus from './Section/WhyChooseus'
import FAQSection from './Section/FAQSection'
import PackageSection from './Section/PackageSection'
import CTASection from './Section/CTASection'

const Homepage = () => {
  return (
    <div>
        <Herosection/>
        <ProblemSection/>
        <WhyChooseus/>
        <PackageSection/>
        <FAQSection/>
        <CTASection/>
    </div>
  )
}

export default Homepage