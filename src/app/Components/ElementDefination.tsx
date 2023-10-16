"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'

const Defination = () => {
    const defination =[
        {
            Name:"Defination 0",
            para:"Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks",
        },
        {
            Name:"Defination 0",
            para:"Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks",
        },
        {
            Name:"Defination 0",
            para:"Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks",
        },
    ]
  return (
    <>
        <div className="">
            <div className="container">
                <div className="py-[50px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Defination</h3>
                    <div className=" flex flex-col md:flex-row ">
                        {
                            defination.map((items,index)=>(

                                <div className="px-[15px]  pl-0">
                                    <h4 className='text-xl  mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>{items.Name+(index+1)}</h4>
                                    <p className=" text-[15px] leading-[30px]" style={{color:Theme.colors?.primary?.[4]}}>
                                    {items.para}
                                    </p>
                                    
                                </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Defination