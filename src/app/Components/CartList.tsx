"use client"
import React, { useState } from 'react'
import { Theme } from '../Theme/Theme'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import {BiCaretDown} from 'react-icons/bi'
import Link from 'next/link'
const CartList = () => {
    // const [count ,setcount]=useState(1)
    const [cartCount, setCartCount] = useState(1);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  const subToCart = () => {
    setCartCount(cartCount>1?cartCount-1:cartCount);
  };

  console.log(cartCount);
  return (
    <>
        <div className="w-full">
            <table className="w-full">
                <thead className='font-normal text-left border-b-2' style={{color:Theme.colors?.primary?.[4]}}>
                    <th scope='col' className='p-3' >Product</th>
                    <th scope='col' className='p-3'>Price</th>
                    <th scope='col' className='p-3'>Quantity</th>
                    <th scope='col' className='p-3'>Total</th>
                </thead>

                <tbody>
                    <tr className='border-b-2'>
                        <td className='py-[30px] px-1.5'>
                            <div className="flex  items-center">
                                <div className="">
                                    <img src="/image/CartList/Cart1.png" alt="" className='max-w-[150px] pr-[30px]'/>
                                </div>
                                <div className="">
                                    <p>Minimalistic shop for multipurpose use</p>
                                </div>
                            </div>
                        </td>
                        <td className='py-[30px] px-1.5'>
                            <h5 className='font-medium'>$360.00</h5>
                        </td>
                        <td className='py-[30px] px-1.5'><div className=" flex justify-center items-center">

                            <div className="">
                                <span className='w-[45px] h-[50px] flex justify-center items-center border text-white ' style={{background:Theme.colors?.primary?.[4],borderColor:Theme.colors?.primary?.[4] }} >{cartCount}</span>
                            </div>
                            
                            <div className="flex flex-col">
                                <button onClick={addToCart}> <span className='p-[10px] flex justify-center items-center border 'style={{borderColor: Theme.colors?.primary?.[4]}}> {<AiOutlinePlus/>} </span> </button>
                                <button  onClick={subToCart}><span className='p-[10px] flex justify-center items-center border 'style={{borderColor:Theme.colors?.primary?.[4]}}> {<AiOutlineMinus/>}</span></button>
                            </div>
                        </div>
                        </td>
                        <td className='py-[30px] px-1.5'>
                        <h5 className='font-medium'>{"$"+(360.00*cartCount)}</h5>
                        </td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='py-[30px] px-1.5'>
                            <div className="flex  items-center">
                                <div className="">
                                    <img src="/image/CartList/Cart2.png" alt="" className='max-w-[150px] pr-[30px]'/>
                                </div>
                                <div className="">
                                    <p>Minimalistic shop for multipurpose use</p>
                                </div>
                            </div>
                        </td>
                        <td className='py-[30px] px-1.5'>
                            <h5 className='font-medium'>$360.00</h5>
                        </td>
                        <td className='py-[30px] px-1.5'><div className=" flex justify-center items-center">

                            <div className="">
                                    <span className='w-[45px] h-[50px] flex justify-center items-center border text-white ' style={{background:Theme.colors?.primary?.[4],borderColor:Theme.colors?.primary?.[4] }} >{cartCount}</span>
                                </div>
                                {/* <div className="flex flex-col">
                                    <button onClick={()=>{setcount(count+1)}}> <span className='p-[10px] flex justify-center items-center border 'style={{borderColor: Theme.colors?.primary?.[4]}}> {<AiOutlinePlus/>} </span> </button>
                                    <button onClick={()=>{setcount(count>1?count-1:count)}}><span className='p-[10px] flex justify-center items-center border 'style={{borderColor:Theme.colors?.primary?.[4]}}> {<AiOutlineMinus/>}</span></button>
                                </div> */}
                                <div className="flex flex-col">
                                    <button onClick={addToCart}> <span className='p-[10px] flex justify-center items-center border 'style={{borderColor: Theme.colors?.primary?.[4]}}> {<AiOutlinePlus/>} </span> </button>
                                    <button  onClick={subToCart}><span className='p-[10px] flex justify-center items-center border 'style={{borderColor:Theme.colors?.primary?.[4]}}> {<AiOutlineMinus/>}</span></button>
                                </div>
                            </div>
                        </td>
                        <td className='py-[30px] px-1.5'>
                        <h5 className='font-medium'>{"$"+(360.00*cartCount)}</h5>
                        </td>
                    </tr>
                </tbody>
            </table>  

            <div className=" flex justify-between border-b-2">
                <div className="py-[30px] px-1.5">
                    <button type="submit"  className='font-medium  py-[18px] px-9   border  border-[#b08ead] hover:text-[#b08ead] text-white bg-[#b08ead] hover:bg-transparent rounded-md mt-[30px] mb-[17px]' >
                        Update Cart
                    </button>
                </div>  
                <div className="py-[30px] px-1.5">
                    <button type="submit"  className='font-medium  py-[18px] px-9   border  border-[#b08ead] hover:text-[#b08ead] text-white bg-[#b08ead] hover:bg-transparent rounded-md mt-[30px] mb-[17px]' >
                        Close Coupan
                    </button>
                </div>  
            </div>
            <div className="border-b-2 flex justify-end items-end text-sm">
                <div className="w-[400px] py-[30px] px-1.5 flex justify-between items-end font-medium">
                    <h3 className=''>
                        Subtotal
                    </h3>
                    <h3 className="">
                        {"$"+2160.00}
                    </h3>
                </div>
            </div>
            <div className="border-b-2 flex justify-end">
                <div className="w-[400px]  py-[30px] px-3 ">
                    <div className=" flex justify-between  text-sm">
                        <div className="font-medium">

                            <h5>Shipping</h5>
                        </div>
                        <div className=" flex justify-end items-end flex-col" >
                            <ul style={{color:Theme.colors?.primary?.[4]}}>
                                <li className='mb-3 flex justify-end leading-[21px]'>
                                    <p>Flat Rate: ${5}.00</p>
                                    <input type="radio" name="flatRate" className='ml-[10px]'  />
                                </li>
                                <li className='mb-3 flex justify-end leading-[21px]'>
                                    <p>Free Shipping</p>
                                    <input type="radio" name="Shipping" className='ml-[10px]'  />
                                </li>
                                <li className='mb-3 flex justify-end leading-[21px]'>
                                    <p>Flat Rate: ${10}.00</p>
                                    <input type="radio" name="flatRate" className='ml-[10px]'  />
                                </li>
                                <li className='mb-3 flex justify-end leading-[21px]'>
                                    <p>Local Delivery: ${5}.00</p>
                                    <input type="radio" name="Delivery" className='ml-[10px]'  />
                                </li>
                            </ul>
                            <h6 className='flex items-center my-5'>Calculate Shipping <span className='ml-[10px]'> <BiCaretDown/></span></h6>
                        </div>

                    </div>
                    <div className=" ml-auto">
                        <ul>
                            <li style={{background:Theme.colors?.textBg?.[0]}}>
                                <div className="w-full px-[15px] mb-5 leading-10" >
                                    <select id="Category" className="bg-transparent  px-3  py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                        <option selected> Select a Countary  </option>
                                        <option value="1">India   </option>
                                        <option value="1">Bangladesh   </option>
                                        <option value="2"> Pakistan  2</option>
                                    </select>
                                </div>
                            </li>
                            <li style={{background:Theme.colors?.textBg?.[0]}}>
                                <div className="w-full px-[15px] mb-5 leading-10" >
                                    <select id="Category" className="bg-transparent  px-3  py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                        <option selected> Select a State  </option>
                                        <option value="1">Uttrakhand   </option>
                                        <option value="1">Punjab   </option>
                                        <option value="2"> Himachal Pardesh  2</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-[15px] mb-5" style={{background:Theme.colors?.textBg?.[0]}}>
                        <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border  bg-transparent   placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Postcode/ZIP" >
                            
                        </input>
                    </div>

                     <div className="  flex justify-end">
                        <button type="submit"  className=' font-medium  py-[18px] px-9   border  border-[#b08ead] hover:text-[#b08ead] text-white bg-[#b08ead] hover:bg-transparent rounded-md ' >
                            Update Detials
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-end gap-1  py-[30px] px-3">
                     <div className="  flex justify-end">
                        <button type="submit"  className=' font-medium  py-[18px] px-9   border  border-[#b08ead] hover:text-[#b08ead] text-white bg-[#b08ead] hover:bg-transparent rounded-md ' >
                            Continue Shopping
                        </button>
                    </div>
                     <div className="  flex justify-end">
                        <button type="submit"  className=' font-medium  py-[18px] px-9   border  border-[#b08ead] hover:text-[#b08ead] text-white bg-[#b08ead] hover:bg-transparent rounded-md ' >
                            Proceed To  Checkout
                        </button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default CartList