import AboutCertification from '@/components/AboutCertification/AboutCertification'
import AboutHome from '@/components/AboutHome/AboutHome'
import AboutTable from '@/components/AboutTable/AboutTable'
import JoinOption from '@/components/MainSection/JoinOption/JoinOption'
import OurEdge from '@/components/OurEdge/OurEdge'
import WhoAreWe from '@/components/WhoAreWe/WhoAreWe'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHome/>
      <WhoAreWe/>
      <OurEdge/>
      <AboutTable/>
      <AboutCertification/>
      <JoinOption/>
    </div>
  )
}

export default page