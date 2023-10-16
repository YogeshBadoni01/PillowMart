"use client"
import React from 'react'
import Title from '../Components/Title'
import { Theme } from '../Theme/Theme'
import ConfirmationAll from '../Components/ConfirmationAll'
import ConfirmationOrder from '../Components/ConfirmationOrder'
const Confirmation = () => {
  return (
    <>
        <div className='mt-[100px]'>
            <Title title="Confirmation  "/>
            <div className="  py-[70px] lg:py-[100px] xl:py-[200px] text-sm">
                <div className="container">
                        <p className=' text-center mb-[35px]' style={{color:Theme.colors?.primary?.[0]}}>Thank you Your order has Been Ready to  Recived</p>
                        
                        <ConfirmationAll/>

                        <ConfirmationOrder  />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Confirmation