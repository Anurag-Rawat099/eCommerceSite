import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import NewsLetterBox from '../components/NewsLetterBox'
import OurPolicy from '../components/OurPolicy'


function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
       <OurPolicy/> 
      <NewsLetterBox/>
          
    </div>
  )
}

export default Home