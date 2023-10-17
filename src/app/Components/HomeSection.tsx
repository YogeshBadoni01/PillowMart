"use client"
import React from 'react'
import Link from 'next/link'
import { Theme } from '../Theme/Theme'

const HomeSection = () => {
  return (
    <>
        <div className=" h-full pt-[200px] pb-[100px]">
            <div className="container">
                <div className=" flex justify-between items-center mb-[100px] md:flex-row flex-col ">
                    <div className=" img relative px-[15px]">
                        <div className="absolute left-0 top-0 z-0">
                            <img src="image/home/Section/product_overlay.png" alt="" />
                        </div>
                        <div className="mt-[35px] ml-[35px] z-10 relative ">
                            <img src="image/home/Section/single_product_1.png" alt="" />
                        </div>
                    </div>
                    <div className=" text md:w-2/5 px-[15px] mt-[150px] md:mt-[80px]">
                        <h5 className='text-xl font-medium' style={{ color:Theme.colors?.primary?.[3] }}>Started from $10</h5>
                        <h2 className='mt-[10px] mb-[50px] '>
                            <Link href="" className='xl:text-[40px] lg:text-[30px] text-[25px] ' style={{ color:Theme.colors?.primary?.[1] }}>
                            Printed memory foam
                            brief modern throw
                            pillow case
                            </Link>
                        </h2>
                        <Link href={"/"} className=" px-9 py-[18px] border border-black">Explore Now</Link>
                    </div>
                </div>

                <div className=" flex justify-between items-center mb-[100px] md:flex-row flex-col">
                    <div className="order-last md:order-first text md:w-2/5 px-[15px] mt-[150px] md:mt-[80px] ">
                        <h5 className='text-xl font-medium' style={{ color:Theme.colors?.primary?.[3] }}>Started from $10</h5>
                        <h2 className='mt-[10px] mb-[50px] '>
                            <Link href="" className='xl:text-[40px] lg:text-[30px] text-[25px]' style={{ color:Theme.colors?.primary?.[1] }} >
                            Printed memory foam
                            brief modern throw
                            pillow case
                            </Link>
                        </h2>
                        <Link href={"/"} className=" px-9 py-[18px] border border-black">Explore Now</Link>
                    </div>
                    <div className="order-first md:order-last img relative px-[15px] ">
                        <div className="absolute right-0 top-0 z-0">
                            <img src="image/home/Section/product_overlay.png" alt="" />
                        </div>
                        <div className="mt-[35px] mr-[35px] z-10 relative ">
                            <img src="image/home/Section/single_product_2.png" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className=" flex justify-between items-center mb-[100px] md:flex-row flex-col">
                    <div className="img relative px-[15px]">
                        <div className="absolute left-0 top-0 z-0">
                            <img src="image/home/Section/product_overlay.png" alt="" />
                        </div>
                        <div className="mt-[35px] ml-[35px] z-10 relative ">
                            <img src="image/home/Section/single_product_3.png" alt="" />
                        </div>
                    </div>
                    <div className="text md:w-2/5 px-[15px]  mt-[150px] md:mt-[80px]">
                        <h5 className='text-xl font-medium' style={{ color:Theme.colors?.primary?.[3] }}>Started from $10</h5>
                        <h2 className='mt-[10px] mb-[50px] '>
                            <Link href="" className='xl:text-[40px] lg:text-[30px] text-[25px] ' style={{ color:Theme.colors?.primary?.[1] }}>
                            Printed memory foam
                            brief modern throw
                            pillow case
                            </Link>
                        </h2>
                        <Link href={"/"} className=" px-9 py-[18px] border border-black">Explore Now</Link>
                    </div>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default HomeSection