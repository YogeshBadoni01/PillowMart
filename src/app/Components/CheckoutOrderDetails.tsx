import React from 'react'
import { Theme } from '../Theme/Theme'
import Link from 'next/link'

const CheckoutOrderDetails = () => {
const Product =[
    {
        Name:"Fresh Blackberry",
        Qty:2,
        Price:720.00,
    },
    {
        Name:"Fresh Tomatoes",
        Qty:2,
        Price:720.00,
    },
    {
        Name:"Fresh Brocoli",
        Qty:2,
        Price:720.00,
    },
]
    
  return (
    <>
        <div className="p-[30px]" style={{background:Theme.colors?.textBg?.[0]}}>
            <h2 className='mb-2 pb-[15px] border-b-2 text-[18px] font-medium text-sm'>Your Order</h2>

            <div className="">
                <ul  style={{color:Theme.colors?.primary?.[4]}}>
                    <li  className='flex leading-[42px]  justify-between   ' >
                        <h6>Product</h6>
                        <h6></h6>
                        <h6>Total</h6>
                    </li>
                    {
                        Product.map((items,index)=>(
                            <li key={index} className='flex leading-[42px]  justify-between'>
                                <h6>{items.Name}</h6>
                                <h6>x0{items.Qty}</h6>
                                <h6>${items.Price}</h6>
                            </li>
                        ))
                    }

                </ul>
                <ul className='uppercase'> 
                    <li  className='flex leading-[42px]  justify-between font-medium  '>
                        <h6 >SUBTOTAL</h6>
                        <h6></h6>
                        <h6 style={{color:Theme.colors?.primary?.[4]}}>${0}</h6>
                    </li>
                    <li className='flex leading-[42px]  justify-between font-medium  '>
                        <h6>Shipping</h6>
                        <h6></h6>
                        <h6 style={{color:Theme.colors?.primary?.[4]}}>FlatRate:${0}</h6>
                    </li>
                    <li className='flex leading-[42px]  justify-between font-medium  '>
                        <h6>Total</h6>
                        <h6></h6>
                        <h6 >${0}</h6>
                    </li>
                </ul>
            </div>

            <div className="">
                <div className="uppercase mt-[10px] mb-[15px]">
                    <input type="radio" name="payment"  />
                    <label htmlFor="CheckPayment " className='font-medium mb-2 ml-2 '>Check Payments</label>
                </div>
                <div className="p-5 bg-white">
                    <p className='leading-7' style={{color:Theme.colors?.primary?.[0]}}> Please send a check to Store Name, Store Street, Store Town,Store State / County, Store Postcode.</p>
                </div>
            </div>
            
            <div className="">
                <div className="uppercase mt-[10px] mb-[15px]">
                    <input type="radio" name="payment"  />
                    <label htmlFor="CheckPayment " className='font-medium mb-2 ml-2 '>Paypal</label>
                </div>
                <div className="p-5 bg-white">
                    <p className='leading-7' style={{color:Theme.colors?.primary?.[0]}}> Please send a check to Store Name, Store Street, Store Town,Store State / County, Store Postcode.</p>
                </div>
            </div>

                <div className="w-full mt-[10px] mb-[15px]">
                    <input className="  "  type="checkbox" value="true"/>
                    <label
                        className="inline-block  hover:cursor-pointer mb-2 ml-2 text-xs"
                        htmlFor="CreateAccount"
                        >
                        I’ve read and accept the 
                    </label>
                    <Link href="#" style={{color:Theme.colors?.primary?.[0]}}> terms & conditions*</Link>
                </div>

            <button type="submit"  className='uppercase leading-[38px] w-full py-[18px] px-9  bg-transparent border  border-[#b08ead] text-[#b08ead] hover:text-white hover:bg-[#b08ead] rounded-md mt-[30px] mb-[17px]' >
            Proceed to Paypal
        </button>
        </div>
    </>
  )
}

export default CheckoutOrderDetails