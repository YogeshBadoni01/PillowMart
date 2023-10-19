"use client"
import Link from 'next/link'
import React from 'react'
import { Theme } from '../Theme/Theme'
import { Box, Textarea,TextInput,Button, Group} from '@mantine/core'
import { useForm } from '@mantine/form'
const ContectFrom = (props:any) => {
    const form = useForm({
        initialValues: { textarea: '',name: '', email: '',website: '', },
    
        // functions will be used to validate values at corresponding key
        validate: {
          textarea: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
          name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          website: (value) => ((/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) ? 'Enter the correct url' : null),
        },
      });
  return (
    <>
        <div className=" " >
            {/* <form action={""}>
                    <div className="w-full  mb-[30px] px-[15px]">
                        <textarea id="about" name="about"  rows={1} className="block h-[150px] w-full rounded-md outline-none  border sm:leading-6 px-3 " placeholder={props.textareaText}></textarea>
                    </div>

                    <div className="flex flex-row ">
                        <div className="w-full  mb-[30px] px-[15px]">
                            <input type="tel" name={props.input1}  className=" h-12 px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder={props.input1} ></input>
                        </div>
                        <div className="w-full  mb-[30px] px-[15px]">
                            <input type="email" name={props.input2}  className=" h-12 px-3  py-[6px]  text-[16px]   border w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6  " placeholder={props.input2}></input>
                        </div>
                    </div>

                    <div className="w-full  mb-[30px] px-[15px]">
                        <input type="text" name={props.input3}  className=" h-12 px-3  py-[6px]  text-[16px]   border    placeholder:text-gray-400  outline-none text-sm sm:leading-6 w-full " placeholder={props.input3}  ></input>
                    </div>

                    <div className="mt-4 mb-[30px]  px-[15px]" >
                    <button type="submit"  className='uppercase font-medium  py-[18px] px-9   border  border-[#b08ead]  text-[#b08ead] hover:text-white hover:bg-[#b08ead] bg-transparent rounded-md ' >
                            Send Messege
                     </button>
                    </div>
            </form> */}
            <Box  mx="auto" className='-p-[15px]'>
                  <form onSubmit={form.onSubmit(console.log)}>
        
                    <Textarea
                        radius="xs"
                        error="Please Enter your "
                        placeholder={props.textareaText}
                        autosize
                        minRows={8.5}
                        maxRows={15}
                        mb={30} 
                        size='md'
                        {...form.getInputProps('textarea')}
                        />
                    <div className="flex justify-between items-center gap-[30px]">
                    
                      <TextInput   placeholder={props.input1} {...form.getInputProps('name')} className='w-full'  mb={30} size='md'  />
                        
                      <TextInput   placeholder={props.input2} {...form.getInputProps('email')} className='w-full'  mb={30} size='md'  />
                    </div>
                      <TextInput  placeholder={props.input3} {...form.getInputProps('website')} mb={30} size='md' />
                      <Group justify="flex-start"  mt="md" className=''>
                        <button type="submit"  className=' py-[18px] px-9  bg-transparent border  border-[#b08ead] text-[#b08ead] hover:text-white hover:bg-[#b08ead] rounded-md mt-[30px] mb-[17px]' >
                            Send Message
                        </button>
                      </Group>
                  </form>
                </Box>
        </div>
    </>
  )
}

export default ContectFrom