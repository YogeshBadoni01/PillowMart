"use client"
import Link from 'next/link'
import React from 'react'
import { isNotEmpty, useForm } from '@mantine/form';
import { Button, Group, TextInput, PasswordInput, Checkbox,Box } from '@mantine/core';
import { Theme } from '../Theme/Theme';
const CheckBoxCoupen = () => {
    const form = useForm({
        initialValues: {
            Coupen: '',
        },
        validate: (values) => ({
         
          Coupen: isNotEmpty()  ? undefined : 'Please Enter the copen code.',
        }),
       
      });
  return (
    <>
         <div className="mb-10">
                    <h2 style={{background:Theme.colors?.textBg?.[0],color:Theme.colors?.primary?.[1],lineHeight:('28px')}} className='p-3 pl-[30px] '>
                        Have a coupon?
                        <Link href={"/Login"} style={{color:Theme.colors?.primary?.[0]}} className='underline'> click here to enter your coupan code</Link>
                    </h2>
                    <div className="text-left" >
                    <TextInput  placeholder="Enter Coupen Code" my={20} ml={30} {...form.getInputProps('coupen')} />
                        <button type="submit"  className=' px-10 ml-[30px] py-3  bg-transparent border   text-[#b08ead hover:text-white hover:bg-[#b08ead] rounded-full ' >
                        Apply coupan</button>
                    </div>
                </div>
    </>
  )
}

export default CheckBoxCoupen