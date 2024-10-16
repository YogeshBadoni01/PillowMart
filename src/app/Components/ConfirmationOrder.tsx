
import React from 'react'
import { Theme } from '../Theme/Theme'

const ConfirmationOrder = () => {

  return (
    <>
        <div className=" w-full">
            <div className="mb-[50px] p-[30px] pb-[30px]" style={{background:Theme?.colors?.textBg?.[0]}}>
                <h3 className='mb-2 text-[18px] leading-[21px]'>Order Details</h3>
                <table className='w-full text-left'>
                    <thead className='border-y-2 ' >
                        <tr className="text-base">
                            <th className='p-3' >
                                Product
                            </th>
                            <th className='p-3'>
                                Quantity
                            </th>
                            <th className='p-3'>
                                Total
                            </th>
                        </tr>
                    </thead>

                    <tbody style={{color:Theme?.colors?.textBg?.[1]}}>
                        <tr className='font-medium'>
                            <td className='p-3 font-medium' >
                                Pixelstore fresh Blackberry
                            </td>
                            <td  className='text-black p-3'>
                                X02
                            </td>
                            <td className='p-3'>
                                $720.00
                            </td>
                        </tr>
                        <tr className='font-medium'>
                            <td className='p-3 font-medium' >
                                Pixelstore fresh Blackberry
                            </td>
                            <td  className='text-black p-3'>
                                X02
                            </td>
                            <td className='p-3'>
                                $720.00
                            </td>
                        </tr>
                        <tr className='font-medium'>
                            <td className='p-3 font-medium' >
                                Pixelstore fresh Blackberry
                            </td>
                            <td  className='text-black p-3'>
                                X02
                            </td>
                            <td className='p-3'>
                                $720.00
                            </td>
                        </tr>
                        <tr className='font-medium'>
                            <td  className='text-black p-3'>
                                SubTotal
                            </td>
                            <td className='p-3 font-medium' >
                            </td>
                            <td className='p-3'>
                                $720.00
                            </td>
                        </tr>
                        <tr className='font-medium'>
                            <td  className='text-black p-3'>
                                Shipping
                            </td>
                            <td className='p-3 font-medium' >
                            </td>
                            <td className='p-3'>
                                Flat Rate :$50.00
                            </td>
                        </tr>
                        <tr className='font-medium border-t-2'>
                            <td  className='text-black p-3'>
                                Quantity
                            </td>
                            <td className='p-3 font-medium' >
                            </td>
                            <td  className='text-black p-3'>
                                Total
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>   
    </>
  )
}

export default ConfirmationOrder