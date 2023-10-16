"use client"
import { useForm } from '@mantine/form';
import '../../../node_modules/@mantine/form/esm/'
// import '@mantine/core/styles.css';
// import '@mantine/form/styles.css'; // Import the @mantine/form styles
import { NumberInput, TextInput, Button, Box, PasswordInput } from '@mantine/core';
// import '@mantine/core/styles.css';
import { Theme } from '../Theme/Theme';
import Link from 'next/link';
import { useState } from 'react';
export default function LoginFrom() {

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = {};
  //   if (!formData.name.trim()) {
  //     validationErrors.name = 'Name is required';
  //   }
  //   if (!formData.email.trim()) {
  //     validationErrors.email = 'Email is required';
  //   } else if (!isValidEmail(formData.email)) {
  //     validationErrors.email = 'Invalid email address';
  //   }

  //   if (Object.keys(validationErrors).length === 0) {
  //     // Submit the form
  //     // You can send the data to the server here
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  // const isValidEmail = (email) => {
  //   // Implement your email validation logic
  //   // You can use regular expressions or a library like validator.js
  //   // Here's a simple example using regular expression
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   return emailRegex.test(email);
  // };
  const form = useForm({
    initialValues: { name: '', password: '', remember: true },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 3 ? 'Name must have at least 3 letters' : null),
      password: (value) => (value.length < 5? 'Name must have at least 5 letters' : null),
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      remember: (value) => (value== true ? 'check to accept term & condition' : null),
    },
  });

  return (
    <>
      <form  className='h-full flex flex-col justify-center '   onSubmit={form.onSubmit(() => {})}>
       
       <input type="text" name="price" id="name" className="px-3 py-[6px] mb-[16px] text-[16px] block w-full focus:border-none  border-b border-[#b08ead]   placeholder:text-gray-400 cursor-pointer outline-none  sm:text-sm sm:leading-6" placeholder="UserName"  {...form.getInputProps('name') } ></input>
       <input type="password" name="price" id="password" className="px-3 py-[6px] mb-[16px] text-[16px] block w-full focus:border-none   border-b border-[#b08ead]   placeholder:text-gray-400 cursor-pointer outline-none  sm:text-sm sm:leading-6" placeholder="Password" {...form.getInputProps('password')}></input>
       <div className="mb-[0.125rem] block min-h-[1.5rem]  mt-[11px]">
          <input className=" mr-[10px]  outline-none border-none"  type="checkbox" value="true"/>
                                        
              <label
                  className="inline-block  hover:cursor-pointer"
                  htmlFor="exampleCheck2">
                  Remember me
              </label>
            </div>
        <button type="submit"  className='py-[18px] px-9  bg-transparent border  border-[#b08ead] text-[#b08ead] hover:text-white hover:bg-[#b08ead] rounded-md mt-[30px] mb-[17px]' >
          Login
        </button>
        <Link href="#!" className='text-right mb-4'>Forgot password?</Link>
      </form>

      
                  </>
  );
}