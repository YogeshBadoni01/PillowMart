import React from 'react'
import Title from '../Components/Title'
import CartList from '../Components/CartList'

const Cart = () => {
  return (
    <>
        <div className="className='mt-[100px]">
            <Title title="Cart List"/>
            <div className="py-[70px] lg:py-[100px] xl:py-[200px]">
                <div className="container">
                    <CartList/>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Cart