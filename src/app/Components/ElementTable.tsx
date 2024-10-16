"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import { Table,Progress } from '@mantine/core'
import '@mantine/core/styles.css'

const textSample = () => {

    const data=[
        {
            No:1,
            CountoryImg:"/image/Elements/f1.jpg",
            Countory:"canada",
            Visits:"645032",
            Percentages:"80",
            PercentagesColor:"#6352e6"
        },
        {
            No:2,
            CountoryImg:"/image/Elements/f2.jpg",
            Countory:"australia",
            Visits:"645032",
            Percentages:"30",
            PercentagesColor:"#e66686"
        },
        {
            No:3,
            CountoryImg:"/image/Elements/f3.jpg",
            Countory:"United Kingdom",
            Visits:"645032",
            Percentages:"55",
            PercentagesColor:"#f09359"
        },
        {
            No:4,
            CountoryImg:"/image/Elements/f4.jpg",
            Countory:"Germany",
            Visits:"645032",
            Percentages:"60",
            PercentagesColor:"#73fbaf"
        },
        {
            No:5,
            CountoryImg:"/image/Elements/f5.jpg",
            Countory:"Australia",
            Visits:"645032",
            Percentages:"40",
            PercentagesColor:"#73fbaf"
        },
        {
            No:6,
            CountoryImg:"/image/Elements/f6.jpg",
            Countory:"China",
            Visits:"645032",
            Percentages:"70",
            PercentagesColor:"#6382e6"
        },
        {
            No:7,
            CountoryImg:"/image/Elements/f7.jpg",
            Countory:"Bangladesh",
            Visits:"645032",
            Percentages:"30",
            PercentagesColor:"#a367a7"
        },
        {
            No:8,
            CountoryImg:"/image/Elements/f8.jpg",
            Countory:"Belgium",
            Visits:"645032",
            Percentages:"60",
            PercentagesColor:"#e66686"
        },
    ]

    const rows = data.map((items,index) => (
        <Table.Tr key={index}>
          <Table.Td>{items.No}</Table.Td>
          <Table.Td>
            <div className="flex">
                <img src={items.CountoryImg} alt={items.CountoryImg} className='mr-3' />
                {items.Countory}
            </div>
          </Table.Td>
          <Table.Td>{items.Visits}</Table.Td>
          <Table.Td>
          <Progress color={items.PercentagesColor} bg={"transparent"} size={"sm"} radius={"md"} value={items.Percentages} animate />
            {/* {items.Percentages} */}
            </Table.Td>
        </Table.Tr>
      ));

      const ths = (
        <Table.Tr className='py-[15px] uppercase' align="center" style={{color:Theme.colors?.textBg?.[3]}}>
          <Table.Th className='text-center'>#</Table.Th>
          <Table.Th>Countory</Table.Th>
          <Table.Th>Visits</Table.Th>
          <Table.Th>Percentages</Table.Th>
        </Table.Tr>
      );
  return (
    <>
        <div className="">
            <div className="container">
                <div className="py-[50px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Table</h3>
                    <div className=' pt-[15px] pb-[30px] px-[30px]' style={{background:Theme.colors?.BtnColor?.[0]}}>
                        <Table captionSide="bottom" align='center' className='w-full '>
                            <Table.Thead>{ths}</Table.Thead>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default textSample