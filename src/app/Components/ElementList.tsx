"use client"
import React from 'react'
import { Theme } from '../Theme/Theme'
import { BiCircle } from 'react-icons/bi'
import { type } from 'os'

const Defination = () => {
    const heading=[
        {
            title: 'Image Gallery',
            links: [
              { Heading: 'This is heading 01'},
              { Heading: 'This is heading 02 '},
              { Heading: 'This is heading 03 '},
              { Heading: 'This is heading 04'},
              { Heading: 'This is heading 01'},
              { Heading: 'This is heading 01'},
              
          ],
      },
    ]
    const data =[
     
        {
            title: 'Unordered List',
            links: [
              { List: 'Fta Keys'},
              { List: 'For Women Only Your Computer Usage'},
              { List: ' Facts Why Inkjet Printing Is Very Appealing', Sublinks: [
                { SubList: 'Fta Keys',superSubLink:[
                    {
                        supersublink:"Addiction When Gambling Becomes"
                    }
                ],},
                
            ],},
              { List: 'Dealing With Technical Support 10 Useful Tips'},
              { List: 'Make Myspace Your Best Designed Space'},
              { List: 'Cleaning And Organizing Your Computer'},
          ],
      },
        {   
            title: 'Ordered List',
            links: [
              { List: 'Fta Keys'},
              { List: 'For Women Only Your Computer Usage'},
              { List: ' Facts Why Inkjet Printing Is Very Appealing', Sublinks: [
                { SubList: 'Fta Keys',superSubLink:[
                    {
                        supersublink:"Addiction When Gambling Becomes"
                    }
                ],},
                
            ],},
            { List: 'Dealing With Technical Support 10 Useful Tips'},
            { List: 'Make Myspace Your Best Designed Space'},
            { List: 'Cleaning And Organizing Your Computer'},
          ],
      },
    ]

    const groups = data.map((group) => {
        
        // {console.log(group)}
        const links = group.links.map((link, index) => (
                <li>
                    {link.List}
                </li>
            
        ));
        // {console.log(group.links)}
    
        return (
        // <Link href={"#"} className="block  lg:px-2  md:bg-transparent text-[#000]">
            <ul className="block  lg:px-2  md:bg-transparent text-[#000]">
                {links}
            </ul>
        // </Link>
        );
      });


  return (
    <>
        <div className="">
            <div className="container">
                <div className="py-[50px]">
                    <h3 className='text-2xl font-medium mb-[30px] leading-9' style={{color:Theme.colors?.primary?.[3]}}>Defination</h3>
                    <div className=" flex flex-col md:flex-row ">
                        {
                            data.map((items,index)=>(
                                <ul>
                                    {/* <li  style={{list-style-type-BiCircle}}> */}
                                    <li  style={{listStyleType:BiCircle}}>
                                        {groups}
                                    </li>
                                </ul>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Defination