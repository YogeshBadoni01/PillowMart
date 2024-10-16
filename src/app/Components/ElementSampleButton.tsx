"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import {BsArrowRight} from 'react-icons/bs'

const SampleButton
 = () => {
  return (
    <>
        <div className="">
            <div className="container">
                <div className="pt-[100px] pb-[70px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}> Sample Button</h3>
                    <div className="">

                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Default</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[1],border:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Primary</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[2],border:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Success</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[3],border:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >info</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[4],border:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >warning</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[5],border:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Danger</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[3]}} >Link</button>
                           <button className='px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Disable</button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Default</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[1],color:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid' }} >Primary</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[2],color:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid' }} >Success</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[3],color:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid' }} >info</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[4],color:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid' }} >warning</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[5],color:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid' }} >Danger</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Link</button>
                           <button className='px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[4],borderWidth:1, borderStyle:'solid' }} >Disable</button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Default</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[1],border:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Primary</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[2],border:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Success</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[3],border:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >info</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[4],border:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >warning</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[5],border:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Danger</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[3]}} >Link</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Disable</button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Default</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[1],color:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid' }} >Primary</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[2],color:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid' }} >Success</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[3],color:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid' }} >info</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[4],color:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid' }} >warning</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[5],color:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid' }} >Danger</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Link</button>
                           <button className='rounded-[3px]  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[4],borderWidth:1, borderStyle:'solid' }} >Disable</button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Default</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[1],border:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Primary</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[2],border:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Success</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[3],border:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >info</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[4],border:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >warning</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[5],border:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Danger</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[3]}} >Link</button>
                           <button className='rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Disable</button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Default</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[1],color:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid' }} >Primary</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[2],color:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid' }} >Success</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[3],color:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid' }} >info</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[4],color:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid' }} >warning</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[5],color:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid' }} >Danger</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Link</button>
                           <button className='rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[4],borderWidth:1, borderStyle:'solid' }} >Disable</button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Default <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[1],border:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Primary <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[2],border:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Success <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[3],border:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >info <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[4],border:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >warning <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[5],border:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Danger <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[3]}} >Link <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[0],border:Theme.colors?.BtnColor?.[0],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[4]}} >Disable <span  ><BsArrowRight/></span> </button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap gap-[10px] mb-[10px]">
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Default <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[1],color:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid' }} >Primary <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[2],color:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid' }} >Success <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[3],color:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid' }} >info <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[4],color:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid' }} >warning <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[5],color:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid' }} >Danger <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[3],borderWidth:1, borderStyle:'solid' }} >Link <span  ><BsArrowRight/></span> </button>
                           <button className='flex items-center gap-2 rounded-full  px-[30px] leading-10 border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[0],color:Theme.colors?.textBg?.[4],borderWidth:1, borderStyle:'solid' }} >Disable <span  ><BsArrowRight/></span> </button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap  justify-normal items-baseline gap-[10px] mb-[10px]">
                           <button className='  px-[30px] leading-[50px] border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[1],border:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Primary  </button>
                           <button className='  px-[30px] leading-[45px] border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[2],border:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Success  </button>
                           <button className='  px-[30px] leading-[40px] border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[3],border:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >info  </button>
                           <button className='  px-[30px] leading-[35px] border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[4],border:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >warning  </button>
                           <button className='  px-[30px] leading-[30px] border-[1px] mt-[10px]' style={{background:Theme.colors?.BtnColor?.[5],border:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid',color:Theme.colors?.textBg?.[5]}} >Danger  </button>
                        </div>
                        <div className=" flex flex-wrap xl:flex-nowrap justify-normal items-baseline gap-[10px] mb-[10px]">
                           <button className='  rounded-full  px-[30px]  leading-[50px] border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[1],color:Theme.colors?.BtnColor?.[1],borderWidth:1, borderStyle:'solid' }} >Primary</button>
                           <button className='  rounded-full  px-[30px]  leading-[45px] border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[2],color:Theme.colors?.BtnColor?.[2],borderWidth:1, borderStyle:'solid' }} >Success</button>
                           <button className='  rounded-full  px-[30px]  leading-[40px] border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[3],color:Theme.colors?.BtnColor?.[3],borderWidth:1, borderStyle:'solid' }} >info</button>
                           <button className='  rounded-full  px-[30px]  leading-[35px] border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[4],color:Theme.colors?.BtnColor?.[4],borderWidth:1, borderStyle:'solid' }} >warning</button>
                           <button className='  rounded-full  px-[30px]  leading-[30px] border-2 mt-[10px]' style={{border:Theme.colors?.BtnColor?.[5],color:Theme.colors?.BtnColor?.[5],borderWidth:1, borderStyle:'solid' }} >Danger</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SampleButton
