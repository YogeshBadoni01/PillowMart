import React from 'react'

const myButton = (props:any) => {
  return (
    <>
        <button  className='px-9 py-[18px]'>
            {props.text}
        </button>   
    </>
  )
}

export default myButton