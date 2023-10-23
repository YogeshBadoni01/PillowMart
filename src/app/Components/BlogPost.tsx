"use client"
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link';
import { Theme } from '../Theme/Theme';
import {CiUser} from 'react-icons/ci'
import {FaRegComments} from 'react-icons/fa'

export default function BlogPost() {

  const post =[
    {
      img:"image/Post/Post1.png",
      Heading:"Google inks pact for new 35-storey office",
      Subheading:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      bottomList1:"Travel,Lifestyle",
      bottomList2:"Commants",
    },
    {
      img:"image/Post/Post2.png",
      Heading:"Google inks pact for new 35-storey office",
      Subheading:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      bottomList1:"Travel,Lifestyle",
      bottomList2:"Commants",
    },
    {
      img:"image/Post/Post3.png",
      Heading:"Google inks pact for new 35-storey office",
      Subheading:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      bottomList1:"Travel,Lifestyle",
      bottomList2:"Commants",
    },
    {
      img:"image/Post/Post4.png",
      Heading:"Google inks pact for new 35-storey office",
      Subheading:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      bottomList1:"Travel,Lifestyle",
      bottomList2:"Commants",
    },
    {
      img:"image/Post/Post5.png",
      Heading:"Google inks pact for new 35-storey office",
      Subheading:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      bottomList1:"Travel,Lifestyle",
      bottomList2:"Commants",
    },
  ]
  return (
    <div className="">
      {
        post.map((items,index)=>(
          <Card shadow="sm" padding="lg" radius="md" className='mb-[50px]' withBorder key={index}>
            <Card.Section>
              <Image
                src={items.img}
                height={160}
                alt="Norway"
              />
            </Card.Section>
              <div className="px-[35px] pt-[60px] pb-[30px] relative">

                  <Group justify="space-between" mt="md" mb="xs">
                      <h2  className='font-semibold md:text-[24px] text-[18px] mb-[15px]' style={{color:Theme.colors?.primary?.[3]}} onMouseEnter={()=>{
                    color:Theme.colors?.primary?.[3]
                  }} >{items.Heading}</h2>
                      <div className="absolute left-5 -top-20  z-10  py-[13px] px-[30px] rounded-md" style={{background:Theme.colors?.primary?.[0]}}>
                          <Link href="#" className=' text-3xl font-semibold text-center text-white'  >
                              <h3 className='leading-9'>15</h3> <p>jan</p>
                          </Link>
                      </div>  
                  </Group>

                  <p   className='mb-[30px] leading-[30px] ' style={{color:Theme.colors?.primary?.[0]}} >
                     {items.Subheading}
                  </p>

                  <div className="">
                    <ul className='divide-x-2 divide-black divide- flex items-center'>
                      <li className='px-2.5'>
                        <Link href="" className='flex items-center'>
                        <CiUser className="mr-[5px]"/>
                        {items.bottomList1}
                        </Link>
                      </li>
                      <li className='px-2.5'>
                        <Link href="" className='flex items-center'>
                        <FaRegComments className="mr-[5px] "/>
                        {items.bottomList2}
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>
          </Card>
        ))
      }
    </div>
  );
}