"use client"
import Link from 'next/link'
import React from 'react'
import { Theme } from '../Theme/Theme'

const BlogComments = () => {
    const comments=[
        {
            img:"image/Post/comment_1.png",
            para:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
            name:"Emilly Blunt",
            date:"December 4, 2017 at 3:12 pm ",
        },
        {
            img:"image/Post/comment_2.png",
            para:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
            name:"Emilly Blunt",
            date:"December 4, 2017 at 3:12 pm ",
        },
        {
            img:"image/Post/comment_3.png",
            para:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
            name:"Emilly Blunt",
            date:"December 4, 2017 at 3:12 pm ",
        },
    ]
  return (
    <>
        <div className="mt-[50px] py-10 border-t-2 border-opacity-50" >
        <h4 className='mb-10  after:block after:pt-4 text-xl ' >05 Comment</h4>
            {
                comments.map((items,index)=>(

                    <div className="pb-12 flex" key={index}>
                        <div className="flex mr-5">
                            <img src={items.img} alt={items.name}  className='max-w-[42px] h-[42px]'/>
                        </div>
                        <div className="">
                            <p className='mb-2.5 text-[15px] leading-[30px]' style={{color:Theme.colors?.textBg?.[1]}}>
                                {items.para}
                            </p>
                            <div className="leading-6 flex justify-between">
                                <div  className='flex items-center' >
                                    <Link href="#">
                                        <p className='text-base font-medium ' style={{color:Theme.colors?.textBg?.[7]}}>{items.name}</p>
                                    </Link>
                                    <span className='text-sm ml-4 'style={{color:Theme.colors?.textBg?.[8]}}>{items.date}</span>
                                </div>
                                <p className='uppercase'style={{color:Theme.colors?.textBg?.[7]}}> Reply</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default BlogComments