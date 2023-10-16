"use client"
import React from 'react'
import Title from '../Components/Title'
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box } from '@mantine/core';
import LoginFrom from '../Components/Login';
import myButton from '../Components/myButton';
import { Theme } from '../Theme/Theme';

const Login = () => {
  return (
    <>
    <div className='mt-[100px]'>

            <Title title="Login"/>

            <div className=" md:h-screen py-[70px] lg:py-[100px] xl:py-[200px]">
                <div className="container">
                    <div className="flex md:flex-row flex-col ">
                        <div className="md:w-1/2 px-3">
                            <div className="bg-gradient-to-r from-[#b08ead] from-0% via-[#4b3049] via-[64%] to-[#b08ead] to-100% bg-[200%] py-20 px-[70px] lg:h-[600px]">
                                <div className=" flex flex-col  justify-center items-center text-center h-full text-white">
                                    <h3 className='mb-[13px] text-2xl font-bold capitalize '>New to our shop?</h3>
                                    <p className='text-[15px] font-normal leading-[25px]'>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                    {/* <myButton text="Create Acount" /> */}
                                    {/* <myButton text="Login"/> */}
                                    <button className='py-[18px] px-9 mt-7 bg-transparent border  border-white hover:text-[#b08ead] hover:bg-white rounded-md ' > Create Account</button>
                                </div>
                            </div>
                        </div>
                        <div className="  px-3 h-full md:w-1/2">
                            <div className=" lg:py-20 lg:px-[70px] ">
                                <h3 className='lg:mb-[60px] mb-5 max-xl:[80px] text-[27px] font-bold leading-9'>
                                    Welcome Back ! 
                                <br />
                                    Please Sign in now
                                </h3>
                                <LoginFrom/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Login;