import React from 'react'
import Title from '../Components/Title'
import TextSample from '../Components/ElementTextSample'
import SampleButton from '../Components/ElementSampleButton'
import Align from '../Components/ElementAlign'
import Defination from '../Components/ElementDefination'
import BlockQuotes from '../Components/ElementBlockQu'
import Tables from '../Components/ElementTable'
import Gallary from '../Components/ElementImgGallary'
import List from '../Components/ElementList'
import Form from '../Components/ElementForm'


const Elements = () => {
  return (
    <>
    <div className='mt-[100px]'>

        <Title title="Elements"/>
        <TextSample/>        
        <SampleButton/>
        <Align/>
        <Defination/>
        <BlockQuotes/>
        <Tables/>
        <Gallary/>
        {/* <List/> */}
        <Form/>
    </div>


    </>
  )
}

export default Elements