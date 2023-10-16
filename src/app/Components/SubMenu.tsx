import { Text } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react'
import {AiFillCaretRight,AiFillCaretDown} from "react-icons/ai"
import { Theme } from '../Theme/Theme';
const SubMenu = (props) => {
    const [open, setOpen]=useState(false)
    // const [Product, setProduct]=useState(false)
    // const [Page, setPage]=useState(false)
    // const [Blog, setBlog]=useState(false)
    const toggle=()=>{
        setOpen(!open)
    }
    
      const groups = props.data.map((group:any) => {
        
        // {console.log(group)}
        const links = group.links.map((link, index) => (
          <Text<'a'>key={index} component="a" href={link.link} onClick={(event) => event.preventDefault()}>
            
            <Link href={link.link} className="block  py-2 px-5 ">
                {link.label}
            </Link>
          </Text>
        ));
        // {console.log(group.links)}
        return (
        // <Link href={"#"} className="block  lg:px-2  md:bg-transparent text-[#000]">
            <li className="block  lg:px-2  md:bg-transparent text-[#000]">
                <div className=" lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button   onMouseEnter={() => toggle()} className="flex items-center gap-x-1  leading-6 " aria-expanded="false">
                        {group.title}
                            {!open ? (
                                <AiFillCaretDown className="text-sm z-50" />
                            ) : (<AiFillCaretRight className="text-sm z-50"/>  )}
                        </button>
                        <div   className={`absolute -left-8 top-[50px] w-max z-50   max-w-md overflow-hidden rounded-md ml-6 shadow-lg text-white ring-1 ring-gray-900/5 ${open ? ' md:p-0 block' : 'hidden'}`} style={{ background:Theme.colors?.primary?.[0] }} >
                            <div className="py-2  ">
                                <div className="group relative flex items-center gap-x-6 rounded-lg  text-sm leading-6 ">
                                    <div className="flex-auto">
                                        {links}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        // </Link>
        );
      });
  return ( 
    <>
    {/* {console.log(groups)} */}
       {groups}
        </>
  )
}

export default SubMenu