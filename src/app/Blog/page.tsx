import React from 'react'
import Title from '../Components/Title'
import BlogPost from '../Components/BlogPost'
import Side from '../Components/BlogSider'
const Blog = () => {
  return (
    <>
    <div className='mt-[100px]'>

        <Title title="Blog"></Title>
        <div className="py-[70px] lg:py-[100px] xl:py-[200px]">
          <div className="container">
          <div className="flex lg:flex-row flex-col">

                <div className="lg:w-2/3 w-full px-[15px]">
                  <BlogPost/>
                </div>
                <div className="lg:w-1/3 w-full px-[15px]">
                  <Side/> 
                </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Blog