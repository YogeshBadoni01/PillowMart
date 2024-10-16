"use client"
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './FooterLinks.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {BiLogoFacebook,BiLogoInstagram,BiLogoGooglePlus,BiLogoLinkedin} from "react-icons/bi"
import {AiOutlineHeart} from 'react-icons/ai'
import { Theme } from '../Theme/Theme';

const data = [
  {
    linkName:"Home",
    link:"/",
  },
  {
    linkName:"About",
    link:"/About",
  },
  {
    linkName:"Product",
    link:"/Product",
  },
  {
    linkName:"Page",
    link:"/Page",
  },
  {
    linkName:"Blog",
    link:"/Blog",
  },
  {
    linkName:"Contect",
    link:"/Contect",
  },
];

export function Footer() {
   

  return (
    <footer className={`${classes.footer} bg-white  `} style={{ color:Theme.colors?.primary?.[1] }}>
      <div className="container">
        <div className="py-[70px]  lg:py-[120px] flex justify-between lg:items-center flex-col  lg:flex-row">
          <div className=" flex justify-center lg:justify-between lg:items-center flex-col  lg:flex-row">
            <div className={classes.logo}>
                <Link href={"/"}>
                  <img src="/image/Logo/logo.png" alt=""  className='mr-[43px]'/>
                </Link>
            </div>
            <div className="mt-[15px] lg:mt-[0]">
            <ul className='flex  gap-[17px] flex-wrap '>
            {data.map((group) => (

              <li className=''>
                <Link href={group.link}> 
                  {group.linkName}
                </Link>
              </li>
              ))
              }
              </ul>
            </div>
          </div>
          <div className="social mt-[25px] lg:mt-[0]">
            <ul className='flex gap-1'>
              <li className='h-[45px] w-[45px] rounded-full flex justify-center items-center' style={{ background:Theme.colors?.primary?.[1] }}>
                <Link href={"/"} className='text-[#fff]' >
                  <BiLogoFacebook/>
                </Link>
              </li>
              <li className='h-[45px] w-[45px] rounded-full flex justify-center items-center' style={{ background:Theme.colors?.primary?.[1] }}>
                <Link href={"/"} className='text-[#fff]' >
                  <BiLogoInstagram/>
                </Link>
              </li>
              <li className='h-[45px] w-[45px] rounded-full flex justify-center items-center' style={{ background:Theme.colors?.primary?.[1] }}>
                <Link href={"/"} className='text-[#fff]' >
                  <BiLogoGooglePlus/>
                </Link>
              </li>
              <li className='h-[45px] w-[45px] rounded-full flex justify-center items-center' style={{ background:Theme.colors?.primary?.[1] }}>
                <Link href={"/"} className='text-[#fff]' >
                  <BiLogoLinkedin/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom footer   */}
      </div>
        <div className=" py-[30px]  "  style={{ background:Theme.colors?.primary?.[2] }}>
          <div className="container">
            <div className=" flex justify-between flex-col  lg:flex-row ">

              <div className="">
                <p ><span  className='flex justify-center items-center'>Copyright © 2023 2023 All rights reserved | This template is made with <AiOutlineHeart/> by pillowMart</span> </p>
              </div>
              <div className=" flex">
                <div className="ml-10">
                  <p>Terms & Conditions</p>
                </div>
                <div className="ml-10">
                  <p>FAQs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </footer>
  );
}
export default Footer;