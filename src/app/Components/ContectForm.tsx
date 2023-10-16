"use client"
import Link from 'next/link'
import React from 'react'
import { Theme } from '../Theme/Theme'

const ContectFrom = (props:any) => {
    
  return (
    <>
        <div className=" " >
            <form action={""}>
                    <div className="w-full  mb-[30px] px-[15px]">
                        <textarea id="about" name="about"  rows={1} className="block h-[150px] w-full rounded-md outline-none  border sm:leading-6 px-3 " placeholder={props.textareaText}></textarea>
                    </div>

                    <div className="flex flex-row ">
                        <div className="w-full  mb-[30px] px-[15px]">
                            <input type="tel" name={props.input1}  className=" h-12 px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder={props.input1} ></input>
                        </div>
                        <div className="w-full  mb-[30px] px-[15px]">
                            <input type="email" name={props.input2}  className=" h-12 px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder={props.input2}></input>
                        </div>
                    </div>

                    <div className="w-full  mb-[30px] px-[15px]">
                        <input type="text" name={props.input3}  className=" h-12 px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder={props.input3}  ></input>
                    </div>

                    <div className="mt-4 mb-[30px]  px-[15px]" >
                    <button type="submit"  className='uppercase font-medium  py-[18px] px-9   border  border-[#b08ead]  text-[#b08ead] hover:text-white hover:bg-[#b08ead] bg-transparent rounded-md ' >
                            Send Messege
                     </button>
                    </div>
            </form>
        </div>
    </>
  )
}

export default ContectFrom