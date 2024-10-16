"use client"
import React from 'react'
import Title from '../Components/Title'
import BlogPost from '../Components/BlogPost'
import Side from '../Components/BlogSider'
import PostDetails from '../Components/BlogPostDetails'
import BlogComments from '../Components/BlogComments'
import ContectFrom from '../Components/ContectForm'
// import { Box, Textarea,TextInput,Button, Group} from '@mantine/core'
// import { useForm } from '@mantine/form'
const SingleBlog = () => {
  // const form = useForm({
  //   initialValues: { textarea: '',name: '', email: '',website: '', },

  //   // functions will be used to validate values at corresponding key
  //   validate: {
  //     textarea: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
  //     name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
  //     website: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
  //   },
  // });
  return (
    <>
    <div className='mt-[100px]'>

        <Title title="Single Blog"></Title>
        <div className="py-[70px] lg:py-[100px] xl:py-[200px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 px-[15px]">
                <PostDetails/>
                
              <BlogComments/>
              <h4 className='  after:block after:pt-4 text-xl ' >Leave a messege</h4>
              <div className="mt-[20px] py-10 border-t-2 border-opacity-50">



                <ContectFrom  textareaText="Write Comments" input1="Name" input2="Email" input3="Website"/>
                {/* <Box  mx="auto" className='-p-[15px]'>
                  <form onSubmit={form.onSubmit(console.log)}>
        
                    <Textarea
                        radius="xs"
                        error="Please Enter your "
                        placeholder="Input placeholder"
                        autosize
                        minRows={8.5}
                        maxRows={15}
                        mb={30} 
                        {...form.getInputProps('textarea')}
                        />
                    <div className="flex justify-between items-center gap-[30px]">
                    
                      <TextInput   placeholder="Name" {...form.getInputProps('name')} className='w-full'  mb={30} size='md'  />
                        
                      <TextInput   placeholder="Email" {...form.getInputProps('email')} className='w-full'  mb={30} size='md'  />
                    </div>
                      <TextInput  placeholder="Website" {...form.getInputProps('website')} mb={30} size='md' />
                      <Group justify="flex-start"  mt="md" className=''>
                        <button type="submit"  className=' py-[18px] px-9  bg-transparent border  border-[#b08ead] text-[#b08ead] hover:text-white hover:bg-[#b08ead] rounded-md mt-[30px] mb-[17px]' >
                            Send Message
                        </button>
                      </Group>
                  </form>
                </Box> */}
                <div className="border-red-600 shadow-sm">

                </div>



                
              </div>
                </div>
                <div className="lg:w-1/3 px-[15px]">
                <Side/> 
                </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default SingleBlog