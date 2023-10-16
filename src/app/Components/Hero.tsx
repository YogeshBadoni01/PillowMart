"use client"
import React from 'react'
import { Button } from '@mantine/core'
import { Theme } from '../Theme/Theme'

const Hero = () => {
  return (
    <>
        <div className="">
            {/* <div className="container"> */}
                <div className=" flex items-center lg:flex-row flex-col ">
                    <div className="after:absolute left-0 bottom-0 bg-[#b08ead] w-[196px] h-[618px] hidden xl:flex"></div>
                        
                    <div className="px-[15px]  w-1/2 flex justify-center">
                        <div className="max-w-[416px] basis-[416px]">
                            <h1 className='text-[40px] md:text-[40px] max-lg:text-[40px]  xl:text-[68px] mb-[10px] font-medium' style={{ color:Theme.colors?.primary?.[3] }}>Best quality pillow</h1>
                            <p className='text-xl leading-[30px]'>Seamlessly empower fully researched growth strategies and interoperable internal</p>
                            {/* <Button className='mt-[50px] px-9 py-[18px] border border-black' variant="filled" style={{ background:Theme.colors?.primary?.[1] }}>Shop Now</Button> */}
                            <button type="submit"  className=' font-medium mt-[50px] py-[18px] px-[50px]   border  border-[#b08ead] hover:text-[#b08ead] text-white bg-[#b08ead] hover:bg-transparent rounded-md ' >
                            Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 mt-10 lg:m-0   text-left">
                        <img src="/image/Home/hero_banner.webp" alt="" />
                    </div>
                    </div>
            {/* </div> */}
        </div>
    </>
  )
}

export default Hero