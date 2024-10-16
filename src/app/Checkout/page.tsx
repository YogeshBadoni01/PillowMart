"use client"
import React from 'react'
import Title from '../Components/Title'
import { NumberInput, TextInput, Button, Box, PasswordInput } from '@mantine/core';
import Link from 'next/link'
import { Theme } from '../Theme/Theme'
import { Form ,useForm} from '@mantine/form'
import BillingDetails from '../Components/BillingDetails';
import CheckOutLogin from '../Components/CheckOutLogin';
import CheckBoxCoupen from '../Components/CheckBoxCoupen';
const ProductCheckout = () => {
    
  return (
    <>
    <div className='mt-[100px]'>

        <Title title="Checkout"/>
        <div className="  py-[70px] lg:py-[100px] xl:py-[200px] text-sm">
            <div className="container">
                <div className="">
                    <h2 style={{background:Theme.colors?.textBg?.[0],color:Theme.colors?.primary?.[1],lineHeight:('28px')}} className='p-3 pl-[30px] '>
                        Returning Customer?
                        <Link href={"/Login"} style={{color:Theme.colors?.primary?.[0]}} className='underline'> click here to login</Link>
                    </h2>
                    <p className='mt-[15px] mb-[25px] leading-[21px] pl-[30px]'>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section. </p>
                </div>

                {/* <div className="w-2/3 ml-[15px]">
                    <form  className='h-full flex flex-col justify-center '   onSubmit={form.onSubmit(() => {})}>
                    <div className="flex justify-between gap-0">
                        <input type="text" name="price" id="name" className="mx-3 px-3 py-[6px] mb-[16px] text-[16px] block w-full  border    placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none  sm:text-sm sm:leading-6" placeholder="UserName"  {...form.getInputProps('name')}></input>
                        <input type="password" name="price" id="password" className="mx-3 px-3 py-[6px] mb-[16px] text-[16px] block w-full  border    placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none  sm:text-sm sm:leading-6" placeholder="Password" {...form.getInputProps('password')}></input>

                    </div>
                    <div className="mb-5 ">
                            <div className="mb-[0.125rem] flex flex-row  items-center min-h-[1.5rem] pl-[1.5rem] mt-[11px]">
                                <button type="submit"  className='py-[18px] px-9  bg-transparent border  border-[#b08ead] text-[#b08ead] hover:text-white hover:bg-[#b08ead] rounded-md mt-[30px] mb-[17px]' >
                                Login
                                </button>
                                <div className="ml-[15px] flex items-center">

                                <input className=" mr-[10px] "  type="checkbox" value="true"/>
                                        
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="exampleCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        <Link href="#!" className='text-right mb-4 pl-[30px]' style={{color:Theme.colors?.primary?.[1]}}>Lost your password?</Link>
                    </div>
                    </form>
                </div>   */}
                <CheckOutLogin/>
                
                {/* <div className="mb-10">
                    <h2 style={{background:Theme.colors?.textBg?.[0],color:Theme.colors?.primary?.[1],lineHeight:('28px')}} className='p-3 pl-[30px] '>
                        Have a coupon?
                        <Link href={"/Login"} style={{color:Theme.colors?.primary?.[0]}} className='underline'> click here to enter your coupan code</Link>
                    </h2>
                    <div className="text-left" >
                    <input type="text" name="coupan" id="name" className="my-5 px-5 py-[6px] ml-[30px] text-[16px] block   border w-2/3   placeholder:text-gray-400  outline-none  sm:text-sm sm:leading-6" placeholder="Enter coupan code"  {...form.getInputProps('coupan')}></input>
                        <button type="submit"  className=' px-10 ml-[30px] py-3  bg-transparent border   text-[#b08ead hover:text-white hover:bg-[#b08ead] rounded-full ' >
                        Apply coupan</button>
                    </div>
                </div> */}
                 
                 <CheckBoxCoupen/>
                
                <BillingDetails />
                

            </div>


        </div>
    </div>
    </>
  )
}

export default ProductCheckout