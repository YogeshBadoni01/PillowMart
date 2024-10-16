"use client"
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link';
import { Theme } from '../Theme/Theme';
import {CiUser} from 'react-icons/ci'
import {FaRegComments,FaFacebookF} from 'react-icons/fa'
import {AiOutlineHeart,AiOutlineBehance,AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsGlobe2} from 'react-icons/bs'


const PostDetails = () => {
    const post =[
        {
          img:"image/Post/Post1.png",
          Heading:"Google inks pact for new 35-storey office",
          Subheading:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          bottomList1:"Travel,Lifestyle",
          bottomList2:"Commants",
        },]
  return (
    <>
        <div className="" style={{color:Theme.colors?.primary?.[4]}}>
          {
            post.map((items,index)=>(
              <Card shadow="sm" padding="lg" radius="md" className=' border-0 shadow-none ' withBorder key={index} >
                <Card.Section>
                  <Image
                    src={items.img}
                    height={160}
                    alt="Norway"
                  />
                </Card.Section >
                  <div className="  pt-[26px] ">

                      <Group justify="space-between" mt="md" mb="xs" >
                          <Text fw={600} className='md:text-[24px] text-[18px] mb-[15px] leading-9' style={{color:Theme.colors?.primary?.[3]}} onMouseEnter={()=>{
                        color:Theme.colors?.primary?.[3]
                      }} >Second divided from form fish beast made every of seas all gathered us saying he our</Text>
                      </Group>

                      

                      <div className=" ">
                        <ul className='divide-x-2 divide-black divide- flex mt-4 mb-6 leading-[21px]' >
                          <li className='px-2.5'>
                            <Link href="" className='flex'>
                            <CiUser className="mr-[5px]"/>
                            {items.bottomList1}
                            </Link>
                          </li>
                          <li className='px-2.5'>
                            <Link href="" className='flex'>
                            <FaRegComments className="mr-[5px] "/>
                            {items.bottomList2}
                            </Link>
                          </li>
                        </ul>

                        <p className='leading-[30px] text-[15px] font-normal mb-[15px]'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower</p>

                        <p className='leading-[30px] text-[15px] font-normal mb-[15px]'>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually</p>


                        <div className="my-[25px]   p-[30px] bg-[#828bb21a]">
                        <p className='leading-[24px] text-[15px] font-normal  bg-white p-[25px] pr-[30px] border-l-2 text-[#888] text-sm border-[#888] italic'>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually</p>
                        </div>

                        <p className='leading-[30px] text-[15px] font-normal mb-[15px]'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower</p>

                        <p className='leading-[30px] text-[15px] font-normal mb-[15px]'>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually</p>
                      </div>

                  </div>
              </Card>
            ))
          }
          <div className="navigation pt-[15px] border-t-2">
              <div className="flex justify-between">
                <div className="flex">
                  <span className='mr-1.5'><AiOutlineHeart/></span>
                  <p> Lily and 4 people like this</p>
                </div>
                <div className="">
                  <ul className='flex'>
                    <li className='mr-[15px]'><FaFacebookF/></li>
                    <li className='mr-[15px]'><FiTwitter/></li>
                    <li className='mr-[15px]'><BsGlobe2/></li>
                    <li className='mr-[15px]'><AiOutlineBehance/></li>
                  </ul>
                </div>
              </div>

              <div className="navigation pt-[15px] ">
                <div className=" mt-[55px] pb-[30px] flex justify-between">
                      <div className="flex gap-5 relative">
                      <div className="relative">
                                <Link href={"#"} className=' hover:hidden text-xl font-semibold z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <AiOutlineArrowLeft className="text-xl font-semibold"/>
                                </Link>
                                  <img src="/image/Post/Rpost_1.png" alt="" className='z-10 static' />
                              </div>
                          <div className="  my-auto">
                            <Link href={"#"} className=' '>
                              <p className='text-sm  leading-[30px]' style={{color:Theme.colors?.primary?.[4]}}>Prev Post</p>
                            </Link>
                            <Link href={"#"}>
                              <h3 className='mb-2 font-medium leading-[25px] text-[18px]' style={{color:Theme.colors?.primary?.[1]}}>Space the Final Frontier</h3>
                            </Link>
                          </div>
                        </div>
                          <div className="flex gap-5 relative text-right">
                              <div className="  my-auto">
                                <Link href={"#"} className=' '>
                                  <p className='text-sm  leading-[30px]' style={{color:Theme.colors?.primary?.[4]}}>Prev Post</p>
                                </Link>
                                  <h3 className='mb-2 font-medium leading-[25px] text-[18px]' style={{color:Theme.colors?.primary?.[1]}}>Space the Final Frontier</h3>
                              </div>
                              <div className="relative">
                                <Link href={"#"} className='text-xl font-semibold z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <AiOutlineArrowRight className="text-xl font-semibold"/>
                                </Link>
                                  <img src="/image/Post/Rpost_2.png" alt="" />
                              </div>

                            </div>  

                </div>
            </div>
            <div className="author mt-[50px] py-10 px-[30px] " style={{background:Theme.colors?.BtnColor?.[9]}}>
              <div className="flex gap-5">
                <img src="/image/Post/author.png" alt="author" />
                <div className="  my-auto">
                  <Link href={"#"} className='  '>
                    <h4 className='mb-2 font-medium leading-4' style={{color:Theme.colors?.primary?.[1]}}>Harvard milan</h4>
                  </Link>
                  <p className='text-sm' style={{color:Theme.colors?.primary?.[4]}}>
                      Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                      our dominion twon Second divided from
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default PostDetails