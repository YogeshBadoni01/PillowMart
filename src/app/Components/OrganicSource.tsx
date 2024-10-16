"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'

const OrganicSource = () => {
    const mycard =[
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_1.svg",
            text:"Credit Card Support",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_2.svg",
            text:"Online Order",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_3.svg",
            text:"Free Delivery",
        },
        {
            image:"https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_4.svg",
            text:"Product with Gift",
        },
    ]
  return (
    <>
        <div className=" py-[200px]">
            <div className="container">
                <div className=" flex lg:gap-[100px] flex-col lg:flex-row">
                    <div className=" lg:w-1/2 mb-2">
                        <h3 className='text-[25px] lg:text-[40px] md:text-[30px] font-medium ' style={{color:Theme.colors?.primary?.[1]}}>Credibly innovate granular internal or organic sources whereas standards.</h3>
                    </div>
                    <div className=" lg:w-2/5">
                        <p className='text-[15px] leading-[1.5]'  style={{color:Theme.colors?.primary?.[5]}}>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

                    {
                        mycard.map((items,index)=>(
                        <div className="px-[15px]" key={index}>
                            <div className="card mt-[100px] p-[35px] border border-black flex flex-col justify-center items-center">
                                <div className="mb-5">
                                    <img src={items.image} alt={items.image} />
                                </div>
                                <div className="">
                                    <h4 className='text-[18px]'  style={{color:Theme.colors?.primary?.[1]}}>{items.text}</h4>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default OrganicSource