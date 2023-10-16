"use client"
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Theme } from '../Theme/Theme'
import Link from 'next/link'
const BlogSlider = () => {
  const category =[
    {
      itemName:"Resaurant Food",
      items:37,
    },  {
      itemName:"Travel news ",
      items:10,
    },{
      itemName:"Modern technology ",
      items:3,
    },{
      itemName:"Product ",
      items:11,
    },  {
      itemName:"Inspiration ",
      items:21,
    },{
      itemName:"Health Care ",
      items:28,
    },
  ]

  const RecentPost =[
    {
      img:"/image/Post/Rpost_1.png",
      Heading:"From life was you fish...",
      date:"January 12, 2019",
    },  
    {
      img:"/image/Post/Rpost_2.png",
      Heading:"The Amazing Hubble",
      date:"02 Hours ago",
    },  
    {
      img:"/image/Post/Rpost_3.png",
      Heading:"Astronomy Or Astrology",
      date:"03 Hours ago",
    },  
    {
      img:"/image/Post/Rpost_4.png",
      Heading:"Asteroids telescope",
      date:"01 Hours ago",
    },  
]

const TopClouds =[
  {
    Link:"project",
  },
  {
    Link:"Love",
  },
  {
    Link:"technology",
  },
  {
    Link:"travel",
  },
  {
    Link:"restorant",
  },
  {
    Link:"life style",
  },
  {
    Link:"design",
  },
  {
    Link:"illustration",
  },
  
]

const InstagramPost =[
  {
    img:"/image/Post/inst1.png",
  },
  {
    img:"/image/Post/inst2.png",
  },
  {
    img:"/image/Post/inst3.png",
  },
  {
    img:"/image/Post/inst4.png",
  },
  {
    img:"/image/Post/inst5.png",
  },
  {
    img:"/image/Post/inst6.png",
  },
]
  return (
    <>
        <div className="">
            <div className="p-[30px] mb-[30px]" style={{background:Theme.colors?.BtnColor?.[9]}}>
              <div className="flex justify-between items-center mb-4 text-[15px] bg-white">
                <div className="py-1.5 pr-1.5 pl-3">
                   <input type="search" name="" id="" placeholder='Search Keyword '  className='text-[13px] outline-none mr-1 h-[50px]'/>
                </div>
                <div className="px-3 py-1">
                  <AiOutlineSearch />
                </div>
              </div>
              <button className='py-[15px] px-[30px] w-full uppercase text-white font-medium' style={{background:Theme.colors?.primary?.[0]}}> Search</button>
            </div>
            <div className="p-[30px] mb-[30px] leading-[30px]" style={{background:Theme.colors?.BtnColor?.[9]}}>
              <h4 className='mb-10  after:block after:pt-4 text-xl border-b-[1px]' >Category</h4>
              <ul className='divide-y-2'>
                {
                  category.map((items,index)=>(

                    <li key={index} className=' pb-3 pt-[15px] first-of-type:pt-0 ' style={{color:Theme.colors?.primary?.[4]}}>
                      <Link href={"#"} className='flex justify-start  '>
                        <p>{items.itemName}</p>
                        <p>({items.items<10?(`0${items.items} `):items.items })</p>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="p-[30px] mb-[30px] leading-[30px]" style={{background:Theme.colors?.BtnColor?.[9]}}>
              <h4 className='mb-10  after:block after:pt-4 text-xl ' >Recent Post</h4>
              <ul className=''>
                {
                  RecentPost.map((items,index)=>(

                    <li key={index} className=' mt-5  first-of-type:mt-0 ' >
                      <div className="flex gap-5">
                        <img src={items.img} alt={items.Heading} />
                        <div className="  my-auto">
                          <Link href={"#"} className='  '>
                            <h3 className='mb-2 font-medium leading-4' style={{color:Theme.colors?.primary?.[1]}}>{items.Heading}</h3>
                          </Link>
                          <p className='text-sm' style={{color:Theme.colors?.primary?.[4]}}>{items.date}</p>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="p-[30px] mb-[30px] leading-[30px]" style={{background:Theme.colors?.BtnColor?.[9]}}>
              <h4 className='mb-10  after:block after:pt-4 text-xl ' >Tag Clouds</h4>
              <ul className='flex flex-wrap gap-1.5 '>
                {
                  TopClouds.map((items,index)=>(
                    <li key={index} className=' ' >
                      <a className='px-5 py-1 text-[13px] bg-white border-[1px] border-[#eee]' href="#">{items.Link}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="p-[30px] mb-[30px] leading-[30px]" style={{background:Theme.colors?.BtnColor?.[9]}}>
              <h4 className='mb-10  after:block after:pt-4 text-xl ' >Tag Clouds</h4>
              <div className='grid grid-cols-3 gap-1.5 '>
                {
                  InstagramPost.map((items,index)=>(
                      <a className=' ' href="#">
                        <img src={items.img} alt="" />  
                      </a>
                  ))
                }
              </div>
            </div>
            <div className="p-[30px] mb-[30px]" style={{background:Theme.colors?.BtnColor?.[9]}}>
            <h4 className='mb-10  after:block after:pt-4 text-xl' >NewsLetter</h4>
              <div className="flex justify-between mb-4 text-[15px]">
                   <input type="search" name="" id="" placeholder='Enter Email '  className='text-[13px] outline-none h-[50px] border-[1px] border-[#f0e9ff] w-full p-1.5 pb-5'/>
              </div>
              <button className='py-[15px] px-[30px] w-full uppercase text-white font-medium' style={{background:Theme.colors?.primary?.[0]}}> Search</button>
            </div>

        </div>
    </>
  )
}

export default BlogSlider