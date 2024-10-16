"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import { Grid,Modal,Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
const Gallary = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const img=[
        {
            img:"/image/Elements/gallery/g1.jpg",
        },
        {
            img:"/image/Elements/gallery/g2.jpg",
        },
        {
            img:"/image/Elements/gallery/g3.jpg",
        },
        {
            img:"/image/Elements/gallery/g4.jpg",
        },
        {
            img:"/image/Elements/gallery/g5.jpg",
        },
        {
            img:"/image/Elements/gallery/g6.jpg",
        },
        {
            img:"/image/Elements/gallery/g7.jpg",
        },
        {
            img:"/image/Elements/gallery/g8.jpg",
        },
    ]
  return (
    <>
        <div className="">
            <div className="container">
                <div className=" py-[50px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Text Sample</h3>
                    <div className="">
                    <Grid gutter={"30px"} grow>
                        {
                            img.map((img,index)=>(

                                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}  key={index} className='cursor-pointer '>
                                    <img src={img.img} alt={img.img} onClick={open} className='h-[200px] w-full object-cover' />
                                    <Modal opened={opened} onClose={close}  centered bg={"transparent"} aria-current>
                                    <img src={img.img} alt={img.img} onClick={open} key={index}/>
                                    </Modal>
                                </Grid.Col>
                                ))
                        }
                       
                    </Grid>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallary