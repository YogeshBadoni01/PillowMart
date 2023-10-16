import React from 'react'
import Title from '../Components/Title'
import BlogPost from '../Components/BlogPost'
import Side from '../Components/BlogSider'
import PostDetails from '../Components/BlogPostDetails'
import BlogComments from '../Components/BlogComments'
import ContectFrom from '../Components/ContectForm'
const SingleBlog = () => {
  return (
    <>
    <div className='mt-[100px]'>

        <Title title="Single Blog"></Title>
        <div className="py-[70px] lg:py-[100px] xl:py-[200px]">
          <div className="container">
            <div className="flex">
                <div className="lg:w-2/3 px-[15px]">
                <PostDetails/>
                
              <BlogComments/>
              <h4 className='  after:block after:pt-4 text-xl ' >Leave a messege</h4>
              <div className="mt-[20px] py-10 border-t-2 border-opacity-50">
                <ContectFrom  textareaText="Write Comments" input1="Name" input2="Email" input3="Website"/>
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