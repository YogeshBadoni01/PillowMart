"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from '@mantine/form';
import { Button, Group, TextInput, PasswordInput, Checkbox,Box } from '@mantine/core';
import { Theme } from '../Theme/Theme';
const CheckOutLogin = () => {
    const form = useForm({
        initialValues: {
          name: '',
          password: '',
          agreeTerms: false, // Assuming this is the "Remember me" checkbox
        },
        validate: (values) => ({
          name: values.name.length >= 2 && values.name.length <= 10 ? undefined : 'Name must be 2 to 10 characters long',
          password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/.test(values.password)
            ? undefined
            : 'Password-criteria: -[a-z], [A-Z],[!@#$%] ,[0-9], more than 6 char',
          agreeTerms: values.agreeTerms ? undefined : 'You must agree to the terms.',
        }),
        onSubmit: (values) => {
          // Handle form submission here
          console.log('Form values:', values);
        },
      });
  return (
    <>
        <div className="">
    
        <div className="lg:w-2/3  ml-[15px] mb-5">
                <Box component="form"  onSubmit={form.onSubmit(() => {})}>
                    <div className=" flex justify-between">

                        <TextInput

                        withAsterisk
                        error="Enter Correct UserName"
                        placeholder="UserName"
                        className='w-full text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-4 cursor-pointer leading-6 outline-none  border-b-2'
                        size='md'
                        mx={16}
                        mb={30}
                        
                        {...form.getInputProps('name')}
                        />

                        <PasswordInput
                        variant="unstyled"
                        withAsterisk
                        error="Enter Correct Password"
                        placeholder="Password"
                        mb={30}
                        className='w-full text-[16px] placeholder:text-[#495057] text-[#495057] text-base mb-4 cursor-pointer leading-6 outline-none  border-b-2 '
                        size='md'
                        {...form.getInputProps('password')}
                        />
                    </div>
                    
                <div className=" flex justify-start items-center">

                    <Group justify="center"  mr="xs" className='' pl={20}>
                        <button type="submit"  className='w-full py-[18px] px-9  bg-transparent border  border-[#b08ead] text-[#b08ead] hover:text-white hover:bg-[#b08ead] rounded-md mt-[30px]  mb-[17px]' >
                            Login
                        </button>
                    </Group>
                <Checkbox
                    defaultChecked
                    label="Remember me"
                    error="please check to accept term and condions"
                    color={Theme.colors?.primary?.[0]}
                    size="sm"
                    {...form.getInputProps('agreeTerms')}
                    // disabled
                    />

                    </div>
                    <Link href="#!" className='text-right mb-4 pl-[30px] mt-[17px]' style={{color:Theme.colors?.primary?.[1]}}>Lost your password?</Link>
                    </Box>
        </div>

        </div>
    </>
  )
}

export default CheckOutLogin