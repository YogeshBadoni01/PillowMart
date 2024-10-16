"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'

const BlockQuotes = () => {
  return (
    <>
        <div className="">
        <div className="container">
                <div className="py-[50px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Block Quotes</h3>
                    <div className="">
                        <blockquote className=" text-[14px] leading-[21px]  p-[30px] pr-[50px] mb-4 border-l-2 border-solid" style={{background:Theme.colors?.BtnColor?.[0],borderColor:Theme.colors?.primary?.[0]}}>
                            
                            “Recently, the US Federal government banned online casinos from operating in America by
                            making it illegal to
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
                            business with me. Listed in this article are the electronic banking”
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlockQuotes