"use client"
import React from 'react'
import  {Theme}  from '../Theme/Theme'
import Link from 'next/link'
import { Grid } from '@mantine/core'
import '@mantine/core/styles.css';


const Treading = () => {
    const treading =[

        {
            image:"/image/home/Treading/tranding_item_1.png",
            text:"Cervical pillow for airplane car office nap pillow",
        },
        {
            image:"/image/home/Treading/tranding_item_2.png",
            text:"Foam filling cotton slow rebound pillows",
        },
        {
            image:"/image/home/Treading/tranding_item_3.png",
            text:"Memory foam filling cotton Slow rebound pillows",
        },
        {
            image:"/image/home/Treading/tranding_item_4.png",
            text:"Cervical pillow for airplane car office nap pillow",
        },
        {
            image:"/image/home/Treading/tranding_item_5.png",
            text:"Foam filling cotton slow rebound pillows",
        },
        {
            image:"/image/home/Treading/tranding_item_6.png",
            text:"Memory foam filling cotton Slow rebound pillows",
        },
    ]
  return (
    <>
        <div className="pt-[70px] pb-10 "  style={{ color:Theme.colors?.primary?.[3],background:Theme.colors?.primary?.[2] }}>
            <div className="container">
                <div className="mb-20 text-center">
                    <h2 className='mb-7 text-[25px] md:text-[30px] xl:text-[36px] font-bold'>Treading items</h2>
                </div>
                
                <Grid>
                    {
                        treading.map((items,index)=>(

                            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                        <div className=" mb-[58px] flex flex-col">
                            <img src={items.image} alt="" />
                            <h3 className='mt-[22px] mb-[8px] text-[18px] md:text-[24px] '><Link href={"/"}>{items.text}</Link></h3>
                            <p className='text-[16px] md:text-[20px]'>From $5</p>
                        </div>
                    </Grid.Col>
                        ))
                    }
                </Grid>
            </div>
        </div>
    </>
  )
}

export default Treading