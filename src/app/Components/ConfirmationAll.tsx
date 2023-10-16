"use client"
import { group } from 'console';
import { link } from 'fs';
import React from 'react'
import { Theme } from '../Theme/Theme';

const ConfirmationAll = () => {
    const data = [
        {
            title: 'Order info',
            links: [
              { heading: 'Order Number', Answer: '60235' },
              { heading: 'Data', Answer: ': Oct 03, 2017' },
              { heading: 'total', Answer: ': USD 2210' },
              { heading: 'mayment methord', Answer: ': Check payments' },
            ],
          },
        {
          title: 'Billing Address',
          links: [
            { heading: 'Street', Answer: ': 56/8' },
            { heading: 'City', Answer: ': Los Angeles' },
            { heading: 'Country', Answer: ': United State' },
            { heading: 'Postcode', Answer: ': 36952' },
          ],
        },
        {
          title: 'Shipping Address',
          links: [
            { heading: 'Street', Answer: ': 56/8' },
            { heading: 'City', Answer: ': Los Angeles' },
            { heading: 'Country', Answer: ': United State' },
            { heading: 'Postcode', Answer: ': 36952' },
          ],
        },
    ]
        const groups = data.map((group) => {
        
            // {console.log(group)}
            const links = group.links.map((link, index) => (
            
                <li className='flex justify-between text-[15px] mb-[3px]' key={index}>
                    <p style={{color:Theme?.colors?.textBg?.[1]}}>{link.heading}</p>
                    <span>{link.Answer}</span>
                </li>
            ));
            // {console.log(group.links)}
        
            return (
                <li className='list-none xl:mb-[30px] mb-[15px] mx-3 ' style={{background:Theme.colors?.textBg?.[0]}} >
                    <div className="px-[35px] py-10 leading-[21px]">
                        <h4 className='mb-4 text-[18px] font-medium'>{group.title}</h4>
                        <ul>
                           {links}
                        </ul>
                    </div>
                </li>
            );
          });

        
  return (
    <>
    <div className="grid lg:grid-cols-2 ">
        {groups}
    </div>


    </>
  )
}

export default ConfirmationAll