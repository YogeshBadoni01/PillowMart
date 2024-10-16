import React from 'react'
import Title from '../Components/Title'
import { Theme } from '../Theme/Theme'
import ContectFrom from '../Components/ContectForm'

import Link from 'next/link'
import ContectSideAddress from '../Components/ContectSideAddress'

const Contect = () => {
    return (
        <>
        <div className='mt-[100px]'>
            <Title title="Contect  "/>
            <div className="  py-[70px] lg:py-[100px] xl:py-[200px] text-sm">
                <div className="container">
                        <div className="mb-12 pb-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6905.356687331295!2d78.23969109622134!3d30.07475323409332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e88997b15d3%3A0x19199b0e065fcd71!2sGumaniwala%2C%20Rishikesh%2C%20Uttarakhand%20249204!5e0!3m2!1sen!2sin!4v1697280438823!5m2!1sen!2sin"  height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
                        </div>
                        <h4 className='mb-10  after:block after:pt-4 text-[27px] font-semibold' >Get in Touch</h4>
                        <div className=" flex flex-col lg:flex-row gap-[30px]">
                            <div className="lg:w-2/3 ">
                                <div className="    -mx-[15px]" >
                                        <ContectFrom title="Get in Touch" textareaText="Enter Messege" input1="Enter Your Name" input2=" Enter Your Email" input3="Enter Subject"/>
                                </div>
                            </div>
                            <div className="lg:w-1/3 ">
                                <ContectSideAddress  />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contect