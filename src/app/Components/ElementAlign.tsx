"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'

const Align = () => {
  return (
    <>
        <div className="">
            <div className="container">
                <div className="py-[50px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Left Align</h3>
                    <div className=" flex flex-col  md:flex-row">
                        <div className="md:w-1/4 pr-[15px]">
                            <img src="/image/Elements/Align.jpg" alt="" />
                        </div>
                        <div className="md:w-3/4 px-[15px]">
                        <p className="text-[15px] leading-[30px]" style={{color:Theme.colors?.primary?.[4]}}>Recently, the US Federal government banned online casinos from operating in America by making
                            it illegal to
                            transfer money to them through any US bank or payment system. As a result of this law, most
                            of the popular
                            online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                            online casino
                            players found themselves being chased by the Federal government. But, after a fortnight, the
                            online casino
                            industry came up with a solution and new online casinos started taking root. These began to
                            operate under a
                            different business umbrella, and by doing that, rendered the transfer of money to and from
                            them legal. A major
                            part of this was enlisting electronic banking systems that would accept this new
                            clarification and start doing
                            business with me. Listed in this article are the electronic banking systems that accept
                            players from the United
                            States that wish to play in online casinos.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="py-[50px] text-right">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Right Align</h3>
                    <div className=" flex flex-col  md:flex-row ">
                        <div className="md:w-3/4 px-[15px] ">
                            <p className="text-[15px] leading-[30px]" style={{color:Theme.colors?.primary?.[4]}}>Recently, the US Federal government banned online casinos from operating in America by making
                                it illegal to
                                transfer money to them through any US bank or payment system. As a result of this law, most
                                of the popular
                                online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                                online casino
                                players found themselves being chased by the Federal government. But, after a fortnight, the
                                online casino
                                industry came up with a solution and new online casinos started taking root. These began to
                                operate under a
                                different business umbrella, and by doing that, rendered the transfer of money to and from
                                them legal. A major
                                part of this was enlisting electronic banking systems that would accept this new
                                clarification and start doing
                                business with me. Listed in this article are the electronic banking systems that accept
                                players from the United
                                States that wish to play in online casinos.
                                </p>
                        </div>
                        <div className="md:w-1/4 pl-[15px]">
                            <img src="/image/Elements/Align.jpg" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Align