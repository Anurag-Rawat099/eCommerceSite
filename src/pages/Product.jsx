import React, { useContext, useEffect, useState } from 'react'

import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useParams, } from 'react-router-dom'


const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")

  const fetchData = () => {
    const item = products.find(i => i._id === productId)
    if (item) {
      setProductData(item)
      setImage(item.image[0])
    }
  }

  useEffect(() => {
    fetchData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((i, index) => (
              <img
                onClick={() => setImage(i)}
                src={i}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Selected product" className='w-full h-auto' />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_dull_icon} alt="star dull" className="w-3" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((i, index) => (
                <button
                  onClick={() => setSize(i)}
                  className={`border py-2 px-4 bg-gray-100 ${i === size ? "border-orange-500" : ""}`}
                  key={index}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 uppercase'
          >
            ADD to Cart
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-20">
        <div className="flex">
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
      </div>

      {/* Description Text */}
      <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla optio voluptatibus nemo consequatur illum a rem unde obcaecati dolore deleniti impedit recusandae ipsum, harum incidunt?</p>
        <p>Recusandae quisquam optio ab assumenda culpa amet, asperiores totam! Omnis expedita molestiae, nisi labore exercitationem recusandae ullam! Corrupti, rem inventore placeat cum facere nisi suscipit?</p>
      </div>

      {/* Related Products */}
      {/* <RelatedProducts category={productData.category} subCategory={productData.subCategory} /> */}
    </div>
  ) : (
    <div className="p-10 text-center text-gray-600">No Product Found</div>
  )
}

export default Product
