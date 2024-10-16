"use client"
import React, { useState } from 'react'
import { Theme } from '../Theme/Theme'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import Link from 'next/link';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
const ProductDetails = () => {
    const [count, setcount] =useState(1)
    const Products =[
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_1.png.webp",
            text:"Cervical pillow for airplane car office nap pillow",
          },
          {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_2.png.webp",
            text:"Geometric striped flower home classy decor",
          },
          {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_3.png.webp",
            text:"Foam filling cotton slow rebound pillows",
          },
          {
              image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_4.png.webp",
              text:"Memory foam filling cotton Slow rebound pillows",
          },
        {
          image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_5.png.webp",
          text:"Memory foam filling cotton Slow rebound pillows",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_6.png.webp",
            text:"Sleeping orthopedic sciatica Back Hip Joint Pain relief",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_7.png.webp",
            text:"Memory foam filling cotton Slow rebound pillows",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_8.png.webp",
            text:"Sleeping orthopedic sciatica Back Hip Joint Pain relief",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_9.png.webp",
            text:"Geometric striped flower home classy decor",
          },
          {
            image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_10.png.webp",
            text:"Geometric striped flower home classy decor",
        },
    ]
  return (
    <>
    <div className="relative z-30 mt-[100px]">
        <div className="lg:h-[450px] h-auto w-full absolute z-10 top-0" style={{background:Theme.colors?.primary?.[3]}}  >
        </div>
            <div className="relative left-0 right-0 top-16 bottom-0 m-auto w-4/5 z-20">
            {/* <div className="relative left-0 right-0 top-16 bottom-0 m-auto max-w-[500px] max-h-[500px] lg:max-w-[800px]  lg:max-h-[800px] xl:max-w-[1200px]  xl:max-h-[1200px] "> */}
                <div className="container">
                <div className=''>
                    <Carousel   dragFree slideGap="md" align="start"loop  >
                        <Carousel.Slide >
                            <img src="https://preview.colorlib.com/theme/pillowmart/img/product/product_list_10.png.webp" alt="" className='h-full w-full'  />
                        </Carousel.Slide>
                        <Carousel.Slide >
                            <img src="https://preview.colorlib.com/theme/pillowmart/img/product/product_list_10.png.webp" alt="" className='h-full w-full'  />
                        </Carousel.Slide>
                        <Carousel.Slide >
                            <img src="https://preview.colorlib.com/theme/pillowmart/img/product/product_list_10.png.webp" alt="" className='h-full w-full'  />
                        </Carousel.Slide>
                    </Carousel>
                </div>
            </div>
            <div className="py-[70px] lg:mt-[100px] lg:mb-[200px] mt-[40px] mb-[70px] flex justify-center flex-col items-center text-center">

                    <Link href={""} className="">
                        <h3 className='text-[25px] lg:text-[40px] md:text-[30px] font-medium  mb-2'>Foam filling cotton slow 
                            <br />
                        rebound pillows</h3>
                    </Link>
                    <p className='lg:mt-[50px] mt-[20px] leading-[1.5]'>
                    Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.
                    </p>
                    <div className="Couter mt-[60px] flex justify-center items-center gap-5">
                        <h4>Quntity</h4>
                        <div className="flex">

                            <button onClick={()=>{setcount(count+1)}}> <span className='w-[45px] h-[50px] flex justify-center items-center border 'style={{borderColor: Theme.colors?.primary?.[4]}}> {<AiOutlinePlus/>} </span> </button>
                            <span className='w-[45px] h-[50px] flex justify-center items-center border text-white' style={{background:Theme.colors?.primary?.[4],borderColor:Theme.colors?.primary?.[4] }} >{count}</span>
                            <button onClick={()=>{setcount(count>1?count-1:count)}}><span className='w-[45px] h-[50px] flex justify-center items-center border 'style={{borderColor:Theme.colors?.primary?.[4]}}> {<AiOutlineMinus/>}</span></button>
                        </div>
                        <p>$5</p>
                    </div>
                </div>
            </div>

    </div>  
    </>
  )
}

export default ProductDetails