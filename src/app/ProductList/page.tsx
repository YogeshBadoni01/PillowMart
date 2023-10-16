import React from 'react'
import Title from '../Components/Title'
import Products from '../Components/Products'
import Review from '../Components/Review'
import OrganicSource from '../Components/OrganicSource'
import Promotions from '../Components/Promotions'

const ProductList = () => {
  return (
    <>
      <div className='mt-[100px]'>
        <Title title={"ProductList"}/>
        <Products/>
        <Review/>
        <OrganicSource />
        <Promotions/>
      </div>
    </>
  )
}

export default ProductList