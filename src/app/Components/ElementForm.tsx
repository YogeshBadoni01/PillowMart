"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import {FaAddressCard,FaPlane} from 'react-icons/fa'
import {AiOutlineGlobal} from 'react-icons/ai'
import { Switch,Checkbox,Radio } from '@mantine/core'

const textSample = () => {

    const Radios =[
        {
            name:"Sample Checkbox",
            color:Theme.colors?.textBg?.[2],
            isDisable:"",
        },
        {
            name:"Primary Color Checkbox",
            color:Theme.colors?.textBg?.[2],
            isDisable:"",
        },
        {
            name:"Confirm Color Checkbox",
            color:Theme.colors?.BtnColor?.[6],
            isDisable:"",
        },
        {
            name:"Disable  Checkbox",
            color:Theme.colors?.BtnColor?.[7],
            isDisable:"",
        },
        {
            name:"Disable Checkbox active" ,
            color:Theme.colors?.BtnColor?.[7],
            isDisable:"disabled",
        },
    ]
    const Checkboxs =[
        {
            name:"Sample Checkbox",
            color:Theme.colors?.textBg?.[2],
            isDisable:"",
        },
        {
            name:"Primary Color Checkbox",
            color:Theme.colors?.textBg?.[2],
            isDisable:"",
        },
        {
            name:"Confirm Color Checkbox",
            color:Theme.colors?.BtnColor?.[6],
            isDisable:"",
        },
        {
            name:"Disable  Checkbox",
            color:Theme.colors?.BtnColor?.[7],
            isDisable:"",
        },
        {
            name:"Disable Checkbox active" ,
            color:Theme.colors?.BtnColor?.[7],
            isDisable:"disabled",
        },
    ]
    const Switches =[
        {
            name:"Sample Switch",
            color:Theme.colors?.primary?.[0],
        },
        {
            name:"Primary Color Switch",
            color:Theme.colors?.primary?.[0],
        },
        {
            name:"Confirm Color Switch",
            color:Theme.colors?.BtnColor?.[2],
        },
    ]
  return (
    <>
        <div className="">
            <div className="container">
                    <div className="flex ">
                        <div className="w-3/4 py-[50px] px-[15px]">
                            <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Form Elements</h3>

                            <form action="" className='w-full'>
                                <div className="mt-2.5">
                                    <input type="text" placeholder='First Name' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-5 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5">
                                    <input type="text" placeholder='Middle Name' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-5 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5">
                                    <input type="text" placeholder='Last Name' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-5 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5 relative">
                                    <FaAddressCard className="absolute left-4 top-0 bottom-0 my-auto "  />
                                    <input type="text" placeholder='Address' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-10 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5 relative" >
                                    <FaPlane className="absolute left-4 top-0 bottom-0 my-auto " />
                                    <input type="text" placeholder='City' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-10 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5 relative" >
                                    <AiOutlineGlobal className="absolute left-4 top-0 bottom-0 my-auto " />
                                    <input type="text" placeholder='Countary' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-10 leading-10 text-sm'/>
                                </div>
                                {/* <div className="mt-2.5 relative">
                                        <AiOutlineGlobal className="absolute left-4 top-0 bottom-0 my-auto "/>
                                    <select id="Category" className=" w-full px-10 leading-10   outline-none h-10" style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}}>
                                        <option selected>Country</option>
                                        <option value="1">Country 1</option>
                                        <option value="2">Country 2</option>
                                        <option value="3">Country 3</option>
                                    </select>
                                </div>
                                <div className="mt-2.5 relative">
                                        <AiOutlineGlobal className="absolute left-4 top-0 bottom-0 my-auto "/>
                                    <select id="Category" className=" w-full px-10 leading-10   outline-none h-10" style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}}>
                                        <option selected>Country</option>
                                        <option value="1">Country 1</option>
                                        <option value="2">Country 2</option>
                                        <option value="3">Country 3</option>
                                    </select>
                                </div> */}

                                <div className="mt-2.5 relative" style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}}>
                                    <AiOutlineGlobal className="absolute left-4 top-0 bottom-0 my-auto " />
                                    <textarea name="Messege" id="" cols={1} rows={1} placeholder='Message' className='w-full h-[100px] px-10 leading-10 text-sm' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}}></textarea>
                                </div>
                                <div className="mt-2.5">
                                    <input type="text" placeholder='Primary color' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-5 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5">
                                    <input type="text" placeholder='Accent color' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-5 leading-10 text-sm'/>
                                </div>
                                <div className="mt-2.5">
                                    <input type="text" placeholder='Secondary color' style={{background:Theme?.colors?.textBg?.[0],color:Theme?.colors?.BtnColor?.[0]}} className='w-full px-5 leading-10 text-sm'/>
                                </div>
                            </form>
                        </div>
                        <div className="w-1/4 py-[50px] px-[15px] text-[15px]">
                            <div className="" style={{color:Theme.colors?.primary?.[3]}}>
                                <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Switches</h3>
                                <ul>
                                    {
                                        Switches.map((items,index)=>(
                                            <li key={index}>
                                                <div className="flex justify-between mb-2.5">
                                                    <div className="">
                                                        {"0"+(index+1)+"."+items.name}
                                                    </div>
                                                    <div className="">
                                                    <Switch
                                                        defaultChecked
                                                        color={items.color}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="mt-[30px]" style={{color:Theme.colors?.primary?.[3]}}>
                                <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>SelectBoxs</h3>
                                <div className="w-full mb-5">
                                    <select id="Category" className="   py-[6px]  text-[16px]   border-0 w-full    placeholder:text-gray-400   outline-none text-sm sm:leading-6">
                                        <option selected>English</option>
                                        <option value="1">Spanish</option>
                                        <option value="2">Arabic</option>
                                        <option value="3">Portuguise</option>
                                        <option value="3">Gardwali</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mt-[30px]" style={{color:Theme.colors?.primary?.[3]}}>
                                <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Switches</h3>
                                <ul>
                                    {
                                        Radios.map((items,index)=>(
                                            <li key={index}>
                                                <div className="flex justify-between mb-2.5 leading-[21px]">
                                                    <div className="">
                                                        {"0"+(index+1)+"."+items.name}
                                                    </div>
                                                    <div className="">
                                                    <Checkbox
                                                        defaultChecked
                                                        color={items.color}
                                                        // {items.isDisable}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="mt-[30px]" style={{color:Theme.colors?.primary?.[3]}}>
                                <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Radios</h3>
                                <ul>
                                    {
                                        Checkboxs.map((items,index)=>(
                                            <li key={index}>
                                                <div className="flex justify-between mb-2.5 leading-[21px]">
                                                    <div className="">
                                                        {"0"+(index+1)+"."+items.name}
                                                    </div>
                                                    <div className="">
                                                    <Radio
                                                        defaultChecked
                                                        color={items.color}
                                                        // {items.color=Theme.colors?.BtnColor?.[7]?disabled:""}
                                                        // {items.isDisable}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default textSample