"use client"
import React from 'react'
import OrganicSource from '../Components/OrganicSource'
import Review from '../Components/Review'
import Promotions from '../Components/Promotions'
import Mission from '../Components/Mission'
import Title from '../Components/Title'

import '@mantine/carousel/styles.css';

const About = () => {

  return (
    <div className='mt-[100px]'>
        <Title title={"About"} />

        <Mission/>

        <OrganicSource/>

        <Review/>

        <Promotions/>
    </div>
  )
}

export default About