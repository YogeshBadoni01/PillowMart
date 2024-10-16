"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import { Input } from '@mantine/core'

const Promotions = () => {
  return (
    <>
        <div className="py-[70px] lg:py-[100px] xl:py-[200px] text-white"style={{ background:Theme.colors?.primary?.[1] }} >
            <div className=" flex flex-col items-center max-w-[758px] justify-center m-auto text-center">
                <h2 className='mb-2 text-[25px] lg:text-[40px] md:text-[30px] font-semibold'>Get promotions & updates!</h2>
                <p className='text-[15px]'>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                <div className="mt-[45px] w-full border border-white px-[30px] py-[19px] rounded-full flex justify-between relative mx-[60px]">
                    <input type='email' placeholder="Enter Email" className='bg-transparent border-none outline-none' />;
                    <button className=' px-[30px] py-[15px] absolute right-1 top-1 bottom-1 rounded-full font-medium  ' style={{ background:Theme.colors?.primary?.[4] ,border:Theme.colors?.primary?.[4]}}>Subscribe</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Promotions