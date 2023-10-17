"use client"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {FaBars} from "react-icons/fa"
import {AiFillCaretRight,AiFillCaretDown,} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import { Gruppo, Work_Sans } from "next/font/google"
import { useEffect, useState } from "react"
import {Theme } from '../Theme/Theme'
import { NavLink,Input, Text } from '@mantine/core';
import SubMenu from "./submenu"
// import { Input } from "postcss"
const work_sans=Work_Sans({
    subsets:['latin'],
    display:'swap',
    weight: ["100","200","300","400","500","600","700","800","900"],
})
const Header = (Onsearch:any) => {
    const [navbar, setNavbar]=useState(false)
    const [search, setSearch]=useState(true)
    const [Product, setProduct]=useState(false)
    const [Pages, setPages]=useState(false)
    const [open, setOpen]=useState(true)
    const [query, setQuery] = useState('');
    // const [Product, setProduct]=useState(false)
    // const [Page, setPage]=useState(false)
    // const [Blog, setBlog]=useState(false)
    const toggle=()=>{
        setOpen(!open)
    }

      
        const handleSearch = () => {
          onSearch(query);
        };
      
    const data = [
        {
          title: 'Product',
          submenu:true,
          links: [
            { label: 'Product List', link: '/ProductList' },
            { label: 'Product Details', link: '/ProductDetails' },
          ],
        },
        {
          title: 'Pages',
          submenu:true,
          links: [
            { label: 'Login', link: '/Login' },
            { label: 'Product Checkout', link: '/Checkout' },
            { label: 'Shopping Cart', link: '/Cart' },
            { label: 'Confirmation', link: '/Confirmation' },
            { label: 'Elements', link: '/Elements' },
            
        ],
    },
    {
        title: 'Blog',
        submenu:true,
        links: [
              { label: 'Blog', link: '/Blog' },
              { label: 'Single Blog', link: '/SingleBlog' },
          ],
        },  
      ];

    //   const groups = data.map((group) => {
        
    //     // {console.log(group)}
    //     const links = group.links.map((link, index) => (
    //       <Text<'a'>key={index} component="a" href={link.link} onClick={(event) => event.preventDefault()}>
            
    //         <Link href={link.link} className="block  py-2 px-5 ">
    //             {link.label}
    //         </Link>
    //       </Text>
    //     ));
    //     // {console.log(group.links)}
    
    //     return (
    //     // <Link href={"#"} className="block  lg:px-2  md:bg-transparent text-[#000]">
    //         <li className="block  lg:px-2  md:bg-transparent text-[#000]">
    //             <div className=" lg:flex lg:gap-x-12">
    //                 <div className="relative">
    //                     <button   onMouseEnter={() => toggle()} className="flex items-center gap-x-1  leading-6 " aria-expanded="false">
    //                     {group.title}
    //                         {!open ? (
    //                             <AiFillCaretDown className="text-sm z-50" />
    //                         ) : (<AiFillCaretRight className="text-sm z-50"/>  )}
    //                     </button>
    //                     <div className={`absolute -left-8 top-[50px] w-max z-50   max-w-md overflow-hidden rounded-md ml-6 shadow-lg text-white ring-1 ring-gray-900/5 ${open ? 'p-12 md:p-0 block' : 'hidden'}`} style={{ background:Theme.colors?.primary?.[0] }} >
    //                         <div className="py-2  ">
    //                             <div className="group relative flex items-center gap-x-6 rounded-lg  text-sm leading-6 ">
    //                                 <div className="flex-auto">
    //                                     {links}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </li>
    //     // </Link>
    //     );
    //   });
  return (  
    <>
        
<header className="fixed top-0 z-50 bg-white border-gray-200 w-full shadow-xl h-100px">
  <div className=" max-w-full-xl h-[100px] flex flex-nowrap  justify-between mx-auto py-4 px-2 md:px-[50px] xl:px-[80px]   text-xl relative">
   <button  className="flex justify-center items-center text-gray-700 rounded-md w-12 outline-none focus:border-gray-400  lg:hidden" onClick={() => setNavbar(!navbar)}
            >
            {navbar ? (
                    <AiOutlineClose/>
            ) : ( <FaBars  className=" h-[28px] w-[40px] z-50 "  style={{ color:Theme.colors?.primary?.[0] }} /> )}
            </button>

            <Link href={"/"} className="flex items-center ">
                <Image  src={"/image/Logo/logo.png"} className=" mr-3 xl:w-[250px] xxl:w-[300px] md:w-full w-[118px] " alt="Logo"  width={300} height={100}/>
            </Link>
        <div className="leftmenu flex justify-evenly items-center lg:w-full flex-nowrap ">


            <div className={` w-full lg:block md:w-auto"  ${navbar ? ' md:p-0 block' : 'hidden'}`}>
               <div className=" lg:static z-[9999] left-0  w-full md:h-auto  justify-evenly bg-white md:inline-block">
                    {/* <div className="mx-2 lg:hidden flex justify-between mt-12">
                        <h2 className="font-bold text-2xl ml-3">Menu</h2>
                        <button  onClick={() => setNavbar(!navbar)}>{!navbar ? (
                            <FaBars  />
                        ) : (<AiOutlineClose className="text-[#0054B7] h-[28px] w-[40px] z-50"/>  )}</button>
                    </div> */}
                    <ul className="min-lg:static absolute m-auto left-0 right-0 md:top-0 top-24  z-50 flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row  md:mt-0 md:border-0 md:bg-white text-md md:text-lg  h-fit lg:h-full justify-evenly divide-y-2 gap-y-5  md:divide-none max-w-[626px] w-full items-start lg:items-center" style={{ color:Theme.colors?.primary?.[0] }}>
                        
                        <Link href="/" className="block  lg:px-2  md:bg-transparent text-[#000]" aria-current="page">
                            <li>
                                Home
                            </li>
                        </Link>
                        
                        <Link href="/About" className="block  lg:px-2  md:bg-transparent text-[#000]">
                        <li>
                            About
                        </li>
                        </Link>
                        <SubMenu data={data}  />
                        {/* {groups} */}
                        <Link href="/Contect" className="block  lg:px-2  md:bg-transparent text-[#000]" aria-current="page">
                            <li>
                                Contact
                            </li>
                        </Link>
                    <div className={`hidden absolute top-[120px] px-5 w-[inherit] shadow-md  text-white  justify-between items-center"  ${!search ? 'lg:flex' : 'hidden'}`}>
                        <input type="search" 
                            placeholder="Search Here"
                            value={query}
                             onChange={(e) => setQuery(e.target.value)}
                         className=" w-full bg-none  h-40px text-white px-1.5 outline-none placeholder-white " style={{ background:Theme.colors?.primary?.[0] }} />
                          <button className="bgwhite" onClick={() => (setSearch(!search),
                            {handleSearch},
               )
            }>{!search ? (
                            <AiOutlineClose  className="text-white h-[28px] w-[40px] z-50" />
                        ) : (<AiOutlineSearch className="text-white h-[28px] w-[40px] z-50" />  )}</button>
                    </div>
                    </ul>
               </div>
            </div>
    
            
            <div className="mr-[30px] ">
            <button  onClick={() => (setSearch(!search)
               )
            }>{!search ? (
                            <AiOutlineSearch  className="text-[#0054B7] h-[28px] w-[40px] z-50"style={{ color:Theme.colors?.primary?.[0] }} />
                        ) : (<AiOutlineSearch className="text-[#0054B7] h-[28px] w-[40px] z-50"style={{ color:Theme.colors?.primary?.[0] }} />  )}</button>
            </div>
            <div className="mr-[30px] ">
                 <Link href={"/"} className="text-black relative"><HiShoppingCart className="text-2xl "/> <span className="absolute right-0 top-0 rounded-full text-xs bg-red-700 text-white p-i inline-block">0</span></Link>
            </div>
        </div>
        {/* mobile serach */}
        <div className={`lg:hidden absolute top-[120px] z-10 w-full m-auto py-5 text-white flex justify-between items-center"  ${open&& !search ? 'p-12 md:p-0 block' : 'hidden'}`}>
        <input type="search" 
                            placeholder="Search Here"
                            value={query}
                             onChange={(e) => setQuery(e.target.value)}
                         className=" w-full bg-none  h-40px text-white px-1.5 outline-none placeholder-white " style={{ background:Theme.colors?.primary?.[0] }} />
                          <button className="bgwhite" onClick={() => (setSearch(!search),
                            {handleSearch},
               )
            }>{!search ? (
                            < AiOutlineClose className="text-white h-[28px] w-[40px] z-50" />
                        ) : (< AiOutlineSearch className="text-white h-[28px] w-[40px] z-50" />  )}</button>
                    </div>
  </div>
</header>
    </>
  )
}
export default Header