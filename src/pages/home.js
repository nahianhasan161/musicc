import BeastStore from '@/components/home/BeastStore'
import HomeHero from '@/components/home/HeroHome'
import LevelUp from '@/components/home/LevelUp'
import SendEmail from '@/components/home/SendEmail'
import Typography from '@/components/typography'
import React from 'react'

const HomeSection = () => {
  return (
    /* min screen */
    <div className='min-w-fit'>
   <HomeHero/>
   <BeastStore/>
   <LevelUp/>
   <SendEmail/>
   </div>
  )
}

export default HomeSection
