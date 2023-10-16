"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'

const Title = (props:any) => {
  return (
    <>
        <div className=" h-[350px] flex justify-center items-center text-white" style={{ background:Theme.colors?.primary?.[0] }}>
            <div className="container">
                <div className="flex justify-center items-center">
                    <h1 className='text-[30px] lg:text-[50px]'>{props.title}</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Title