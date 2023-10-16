"use client"
import React from 'react'
import Link from 'next/link'
import { Theme } from '../Theme/Theme'
import {BsPlayFill} from 'react-icons/bs'

const Mission = () => {
  return (
    <>
         <div className="Mission  pt-[70px] lg:pt-[100px] xl:pt-[200px]">
          <div className="container">
            <div className="max-w-[750px] m-auto">

              <div className="header">
                <h5 className='text-[18px] md:text-[20px] mb-2' style={{ color:Theme.colors?.primary?.[0] }}>Our Mission</h5>
              </div>

              <div className="">
                <p className='mt-[5px] mb-[30px] lg:text-[24px] text-[20px]'>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</p>
              </div>

              <div className=" relative">

                  <div className=" absolute left-0 right-0 top-0 bottom-0 h-[84px] w-[84px] m-auto p-5 rounded-full flex justify-center items-center" style={{ background:Theme.colors?.primary?.[0] }}>
                    <Link href={"https://www.youtube.com/watch?v=DWHB6nTyKDI"}>
                      <BsPlayFill className="text-4xl text-white " 
                      />
                    </Link>
                  </div>
                <img src={"/image/about/about.png"} alt="" />

              </div>

            </div>
          </div>
        </div> 
    </>
  )
}

export default Mission