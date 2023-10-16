"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import { SimpleGrid, MultiSelect,TextInput, Box } from '@mantine/core'
import '../../../node_modules/@mantine/core/esm/index.css'
import {BiSearchAlt2} from 'react-icons/bi'

import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/ai'

const Products = () => {
// const [searchText ,setSearchText]=useState("");

  const Products =[
    {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_1.png.webp",
        text:"Cervical pillow for airplane car office nap pillow",
      },
      {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_2.png.webp",
        text:"Geometric striped flower home classy decor",
      },
      {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_3.png.webp",
        text:"Foam filling cotton slow rebound pillows",
      },
      {
          image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_4.png.webp",
          text:"Memory foam filling cotton Slow rebound pillows",
      },
    {
      image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_5.png.webp",
      text:"Memory foam filling cotton Slow rebound pillows",
    },
    {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_6.png.webp",
        text:"Sleeping orthopedic sciatica Back Hip Joint Pain relief",
    },
    {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_7.png.webp",
        text:"Memory foam filling cotton Slow rebound pillows",
    },
    {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_8.png.webp",
        text:"Sleeping orthopedic sciatica Back Hip Joint Pain relief",
    },
    {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_9.png.webp",
        text:"Geometric striped flower home classy decor",
      },
      {
        image:"https://preview.colorlib.com/theme/pillowmart/img/product/product_list_10.png.webp",
        text:"Geometric striped flower home classy decor",
    },
]
//search
// const handleSearch = (e) => {
//   setSearchText(e.target.value);
// }
  return (
    <>
      
      {/* <Title title={"About"} /> */}
      <div className="  pt-[70px] lg:pt-[100px] xl:pt-[200px]">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-2">
            <Box className=" flex flex-col lg:w-1/3 ">
              {/* filter */}
              
                <div className="mb-[30px] focus:outline-none w-full border px-[25px] py-[13px] h-[50px] rounded-full flex justify-between items-center relative text-sm" style={{background:Theme.colors?.primary?.[6],borderColor:Theme.colors?.primary?.[6],color:Theme.colors?.primary?.[4]}}>
                    <input type='email' placeholder="Search Keyword" className='bg-transparent border-none outline-none' />
                    <button className='  ml-1 font-medium ' ><BiSearchAlt2/></button>
                </div>
                <div className="mb-[30px] focus:outline-none w-full border px-[25px] py-[13px] rounded-full flex justify-between relative text-sm" style={{background:Theme.colors?.primary?.[6],borderColor:Theme.colors?.primary?.[6],color:Theme.colors?.primary?.[4]}}>

                    <select id="Category" className=" text-sm rounded-lg block outline-none w-full border-none bg-transparent">
                      <option selected>Category</option>
                      <option value="1">Category 1</option>
                      <option value="2">Category 2</option>
                      <option value="3">Category 3</option>
                     
                    </select>

                  </div>
                <div className="mb-[30px] focus:outline-none w-full border px-[25px] py-[13px] rounded-full flex justify-between relative text-sm" style={{background:Theme.colors?.primary?.[6],borderColor:Theme.colors?.primary?.[6],color:Theme.colors?.primary?.[4]}}>

                    <select id="Type" className=" text-sm rounded-lg block outline-none w-full border-none bg-transparent">
                      <option selected>Type</option>
                      <option value="1">Type 1</option>
                      <option value="2">Type 2</option>
                      <option value="3">Type 3</option>
                     
                    </select>

                  </div>
            
            </Box>
            <div className=" lg:w-2/3">
              {/* prdlist */}
              <SimpleGrid
                  cols={{ base: 1, md: 2, lg: 2 }}
                    // spacing={{ base: 10, sm: 'xl' }}
                    // verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                    {
                        Products.map((items,index)=>(
                            <div key={index} className='px-3 '>
                              <div className=" mb-[58px] flex flex-col">
                                <img src={items.image} alt="" />
                                <h3 className='mt-[22px] mb-[8px] text-[18px] md:text-[24px] '><Link href={"/"}>{items.text}</Link></h3>
                                <p className='text-[16px] md:text-[20px]'>From $5</p>
                              </div>
                            </div>
                        ))
                    }
                </SimpleGrid>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products 