"use client"
import { useForm } from '@mantine/form';
import React from 'react'
import CheckoutOrderDetails from './CheckoutOrderDetails';
const BillingDetails = () => {
    const form = useForm({
        initialValues: { name: '', password: '', remember: true },
    
        // functions will be used to validate values at corresponding key
        validate: {
        //   Fname: (value) => (value.length < 3 ? 'Name must have at least 3 letters' : null),
        //   Lname: (value) => (value.length < 3 ? 'Name must have at least 3 letters' : null),
          password: (value) => (value.length < 5? 'Name must have at least 5 letters' : null),
          // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          remember: (value) => (value== true ? 'check to accept term & condition' : null),
        },
      });
  return (
    <>
        <div className="flex flex-col lg:flex-row">
            <div className="px-3 lg:w-2/3">
                <h3 className='mb-[30px] pb-[10px] text-[18px] font-medium'>Billing Details</h3>

                <form action="">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="w-full px-[15px] mb-5">
                                <input type="text" name="price"  className=" px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="First Name"  {...form.getInputProps('Fname')}></input>
                            </div>
                            <div className="w-full px-[15px] mb-5">
                                <input type="password" name="price"  className="px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="Last Name" {...form.getInputProps('Lname')}></input>
                            </div>

                        </div>
                            <div className="w-full px-[15px] mb-5">
                                <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Company Name"  {...form.getInputProps('Cname')}></input>
                            </div>

                        <div className="flex flex-row ">
                            <div className="w-full px-[15px] mb-5">
                                <input type="tel" name="price"  className=" px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="Phone Number"  {...form.getInputProps('Phone')}></input>
                            </div>
                            <div className="w-full px-[15px] mb-5">
                                <input type="email" name="price"  className="px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="Email Address" {...form.getInputProps('Email')}></input>
                            </div>
                        </div>

                        <div className="w-full px-[15px] mb-5">
                            <select id="Category" className=" px-3  py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                <option selected>Country</option>
                                <option value="1">Country 1</option>
                                <option value="2">Country 2</option>
                                <option value="3">Country 3</option>
                            </select>
                        </div>

                        <div className="w-full px-[15px] mb-5">
                            <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Address line 01"  {...form.getInputProps('Fname')}></input>
                        </div>

                        <div className="w-full px-[15px] mb-5">
                            <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Address line 02"  {...form.getInputProps('Fname')}></input>
                        </div>

                        <div className="w-full px-[15px] mb-5">
                            <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Town/City"  {...form.getInputProps('Fname')}></input>
                        </div>
                        
                        <div className="w-full px-[15px] mb-5">
                            <select id="Category" className=" px-3  py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                <option selected>District   </option>
                                <option value="1">District   1</option>
                                <option value="2">District   2</option>
                                <option value="3">District   3</option>
                            </select>
                        </div>
                        
                        <div className="w-full px-[15px] mb-5">
                            <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Postcode/ZIP"  {...form.getInputProps('Fname')}></input>
                        </div>

                        <div className="w-full px-[15px] mb-5">

                            <input className=" mr-[10px] "  type="checkbox" value="true"/>
                                    
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer mb-2"
                                htmlFor="CreateAccount">
                                    Create an Account?
                            </label>
                        </div>

                        <h3 className='mb-[30px] pb-[10px] text-[18px] font-medium'>Shipping Details</h3>
                        
                        <div className="w-full px-[15px] mb-5">

                            <input className=" mr-[10px] "  type="checkbox" value="true"/>
                                    
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer mb-2"
                                htmlFor="differentAddress">
                                   Ship to a different address?
                            </label>
                        </div>
                        <div className="w-full px-[15px] mb-5">
                            <textarea id="about" name="about"  rows={1} className="block h-[150px] w-full rounded-md outline-none py-1.5 border sm:leading-6 px-3 mt-[15px]" placeholder='Order Notes'></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div className="px-3 lg:w-1/3">
                <CheckoutOrderDetails/>
            </div>
        </div>
    </>
  )
}

export default BillingDetails