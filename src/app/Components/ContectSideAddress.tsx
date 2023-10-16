"use client"
import Link from 'next/link'
import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {TfiTablet,TfiEmail} from 'react-icons/tfi'
import { Theme } from '../Theme/Theme'

const ContectSideAddress = () => {
    const Address =[
        {
            icon:<AiOutlineHome className="w-[27px] h-[27px] text-[27px]" />,
            Heading:"Buttonwood, California.",
            subHeading:"Rosemead, CA 91770",
        },  
        {
            icon:<TfiTablet className="w-[27px] h-[27px] text-[27px]" />,
            Heading:"00 (440) 9865 562",
            subHeading:"Mon to Fri 9am to 6pm",
        },  
        {
          icon:<TfiEmail className="w-[27px] h-[27px] text-[27px]" />,
          Heading:"support@colorlib.com",
          subHeading:"Send us your query anytime!",
        },  
          
    ]
  return (
    <div>
        {
            Address.map((items,index)=>(

                <li key={index} className=' mt-5  first-of-type:mt-0 list-none' >
                    <div className="flex gap-5" >
                    <div className="" style={{color:Theme.colors?.primary?.[7]}} >
                        {items.icon }
                    </div>
                    <div className="  my-auto">
                        <Link href={"#"} className='  '>
                        <h3 className=' text-base font-medium leading-6' style={{color:Theme.colors?.primary?.[1]}}>{items.Heading}</h3>
                        </Link>
                        <p className='text-[15px] leading-[30px]' style={{color:Theme.colors?.primary?.[4]}}>{items.subHeading}</p>
                    </div>
                    </div>
                </li>
                ))
        }
    </div>
  )
}

export default ContectSideAddress