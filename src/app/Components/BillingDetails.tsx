"use client"
import { useForm } from '@mantine/form';
import React from 'react'
import CheckoutOrderDetails from './CheckoutOrderDetails';
import { Box, Checkbox, TextInput, Textarea } from '@mantine/core';
const BillingDetails = () => {
    const form = useForm({
        initialValues: {
          Fname: '',
          Lname: '',
          Phone: '',
          Email: '',
          Address1:'',
          Address2:'',
          notes: '',
          TownCity: ''
        //   remember: false, // Assuming this is the "Remember me" checkbox
        },
        validate: (values) => ({
            Fname: values.Fname.length > 2 && values.Fname.length <= 10 ? undefined : 'Fast Name must be 3 to 10 characters long',
            Lname: values.Lname.length > 2 && values.Lname.length <= 10 ? undefined : 'Last Name must be 3 to 10 characters long',
            Phone: /^\d{10}$/.test(values.Phone)? undefined :'Enter correct Phone Number',
            Email: /^\S+@\S+$/.test(values.Email) ? null : 'Invalid email',
            Address1: values.Address1.length >= 5 ? undefined : 'Correct the Address 01',
            Address2: values.Address1.length >= 5 ? undefined : 'Correct the Address 01',
            notes: values.Address1.length >= 5 ? undefined : 'Create A Note',
            TownCity: values.Address1.length >= 5 ? undefined : 'Add Town / City',
            // Address1:

            //   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/.test(values.password)
            //     ? undefined
            //     : 'Password-criteria: -[a-z], [A-Z],[!@#$%] ,[0-9], more than 6 char',
            //   CreateAccount: values.agreeTerms ? undefined : 'You must agree to the terms.',
        //   DiffAddress: values.DiffAddress ? undefined : 'You must agree to the terms.',
        //   remember: values.remember ? undefined : 'You must agree to the terms.',
        }),
        onSubmit: (values) => {
          // Handle form submission here
          console.log('Form values:', values);
        },
      });

      const CustomInput = () => {
        return (
          <Input
            placeholder="Enter your name *"
            iconPosition="right"
            icon={<span style={{ color: 'red' }}>*</span>}
          />
        );
      };
  return (
    <>
                <Box component="form"  onSubmit={form.onSubmit(() => {})}>
        <div className="flex flex-col lg:flex-row">
            <div className="px-3 lg:w-2/3">

                <h3 className='mb-[30px] pb-[10px] text-[18px] font-medium'>Billing Details</h3>
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row w-full px-[15px] gap-[30px]" >
                            
                        <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="First Name"
                            placeholder="First Name"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#777] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('Fname')}
                            />
                        <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Last Name"
                            placeholder="Last Name"
                            className='w-full px-[15px] text-[16px] placeholder:text-[#777] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('Lname')}
                            />
                            {/* <div className="w-full px-[15px] mb-5">
                                <input type="text" name="price"  className=" px-3  py-[6px]  text-[16px]   border w-full placeholder:last:   placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="First Name"  {...form.getInputProps('Fname')}></input>
                            </div> */}
                            
                            {/* <div className="relative">
                            <TextInput
                                placeholder="Enter your name *"
                                className="pr-10 after:content-['*']  placeholder:after:text-red-500 placeholder:after:top-0 placeholder:after:absolute mb-[30px] " // Add padding to the right of the input
                            />
                            <span className="after:absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500">*</span>
                            </div> */}

                            {/* <div className="w-full px-[15px] mb-5">
                                <input type="text" name="price"  className="px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="Last Name" {...form.getInputProps('Lname')}></input>
                            </div> */}

                        </div>
                             <div className="w-full px-[15px] ">
                                {/* <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Company Name"  {...form.getInputProps('Cname')}></input> */}
                                <TextInput
                                variant="unstyled"
                                withAsterisk
                                error="Company Name"
                                placeholder="Company Name"
                                className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                                size='sm'
                                {...form.getInputProps('Cname')}
                                />
                            </div> 


                        <div className="flex flex-col md:flex-row w-full px-[15px] gap-[30px] ">
                        <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Phone number"
                            placeholder="Phone number"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('Phone')}
                            />
                        <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Email"
                            placeholder="Email Address"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('Email')}
                            />
                            {/* <div className="w-full px-[15px] mb-5">
                                <input type="tel" name="price"  className=" px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="Phone Number"  {...form.getInputProps('Phone')}></input>
                            </div> */}
                            {/* <div className="w-full px-[15px] mb-5">
                                <input type="email" name="price"  className="px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder="Email Address" {...form.getInputProps('Email')}></input>
                            </div> */}
                        </div>

                        <div className="w-full px-[15px] mb-5">
                            <select id="Category" className=" px-3  py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                <option selected>Country</option>
                                <option value="1">Country 1</option>
                                <option value="2">Country 2</option>
                                <option value="3">Country 3</option>
                            </select>
                        </div>

                        <div className="w-full px-[15px]">
                            {/* <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Address line 01"  {...form.getInputProps('Fname')}></input> */}
                            
                            <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Address"
                            placeholder=" Address line 01"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('Address1')}
                            />

                        </div>

                        <div className="w-full px-[15px] ">
                            {/* <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Address line 02"  {...form.getInputProps('Fname')}></input> */}
                            
                            <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Address"
                            placeholder=" Address line 02"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('Address2')}
                            />
                        </div>

                        <div className="w-full px-[15px] ">
                            {/* <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Town/City"  {...form.getInputProps('Fname')}></input> */}
                            <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Town/City"
                            placeholder=" Town/City"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('TownCity')}
                            />
                        </div>
                        
                        <div className="w-full px-[15px] mb-5">
                            <select id="Category" className=" px-3  py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                <option selected>District   </option>
                                <option value="1">District   1</option>
                                <option value="2">District   2</option>
                                <option value="3">District   3</option>
                            </select>
                        </div>
                        
                        <div className="w-full px-[15px] ">
                            {/* <input type="text" name="companyName"  className=" px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder="Postcode/ZIP"  {...form.getInputProps('Fname')}></input> */}
                            <TextInput
                            variant="unstyled"
                            withAsterisk
                            error="Postcode/ZIP"
                            placeholder=" Postcode/ZIP"
                            className='w-full px-[15px]  text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-5 cursor-pointer leading-6 outline-none  border-[1px]'
                            size='sm'
                            {...form.getInputProps('addres02')}
                            />
                        </div>

                        <div className="w-full px-[15px] mb-5">

                            <input className=" mr-[10px] "  type="checkbox" value="true"/>
                                    
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer mb-2"
                                htmlFor="CreateAccount">
                                    Create an Account?
                            </label>

                            {/* <Checkbox
                                defaultChecked
                                label="Create an Account?"
                                error="please check to accept term and condions"
                                color={Theme.colors?.primary?.[0]}
                                size="sm"
                                {...form.getInputProps('agreeTerms')}

                                // disabled
                                /> */}
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
                            {/* <textarea id="about" name="about"  rows={1} className="block h-[150px] w-full rounded-md outline-none py-1.5 border sm:leading-6 px-3 mt-[15px]" placeholder='Order Notes'></textarea> */}
                            
                            <Textarea
                                radius="xs"
                                error="Please Enter your "
                                placeholder={"Order Notes"}
                                autosize
                                minRows={6}
                                maxRows={8}
                                mb={30} 
                                size='sm'
                                {...form.getInputProps('notes')}
                                />
                        </div>
                    </div>
            </div>
            <div className="px-3 lg:w-1/3">
                <CheckoutOrderDetails/>
            </div>
        </div>
                </Box>
    </>
  )
}

export default BillingDetails