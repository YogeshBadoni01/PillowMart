"use client"
import React from 'react'
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import {ImQuotesRight} from "react-icons/im" 
import {FiChevronRight,FiChevronLeft} from "react-icons/fi" 

import { Theme } from '../Theme/Theme';
import '@mantine/carousel/styles.css';

const Review = () => {
  const slides =[
    {
      Name:"-Micky mouse",
      image:"/image/home/carousal/client_1.png",
      text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
    },
    {
      Name:"-Micky mouse",
      image:"/image/home/carousal/client_2.png",
      text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
    },
    {
      Name:"-Micky mouse",
      image:"/image/home/carousal/client.png",
      text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.",
    },
  ]
  return (
    <>

        <div className="py-[100px] text-white" style={{background:Theme.colors?.primary?.[0]}}>
            <div className="container">
              <Carousel
                loop
                
                className=' m-auto'
                nextControlIcon={<FiChevronRight style={{ width: rem(28), height: rem(28) }} />}
                previousControlIcon={<FiChevronLeft style={{ width: rem(28), height: rem(28),Background:"transparent"}} />}
              >
                
                  {
                    slides.map((items,index)=>(
                      <Carousel.Slide key={index}  className=' '>

                        <div className=" flex flex-col justify-center items-center gap-[35px]  text-center m-auto md:w-[750px]">
                          <div className="relative">
                              <img src={items.image} alt={items.image} className='w-[105px] h-[105px]'/>
                              <div className="img p-4 h-[50px] w-[50px] rounded-full absolute bottom-0 left-[60px]" style={{background:Theme.colors?.primary?.[2]}}>
                              <ImQuotesRight className=""/>
                              </div>
                          </div>
                          <p className='text-[18px] lg:text-[24px]'>{items.text}</p>
                          <p>{items.Name}</p>
                        </div>
                </Carousel.Slide>
                    ))
                  }
              </Carousel>
            </div>
        </div>
    </>
  )
}

export default Review;