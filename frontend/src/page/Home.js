import React from 'react'
import bike_image from '../assest/bike_image.webp'
import { useSelector } from 'react-redux'
import HomeCart from '../component/HomeCart'

const Home = () => {
  const isLoadedDataProduct = useSelector(state => state.product)
  
  return (
    <div className='flex'> 
      <div className='p-4 w-1/2'> 
        <div className='h-8 flex items-center justify-center bg-slate-400 rounded-full w-1/3 text-sm p-2'>
          <span className='pr-4 font-bold'>Bike Delivery</span>
          <img src={bike_image} alt="" className='h-full'/>
        </div>
        <div className='py-8'>
          <p className='font-bold text-7xl'>The Fasted Delivery in <span className='text-red-600'>Your Home</span></p>
          <p className='pt-8 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tenetur ad velit aperiam at eius iure. Pariatur necessitatibus deleniti corrupti aperiam. A beatae illo placeat sunt id, voluptates expedita.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tenetur ad velit aperiam at eius iure. Pariatur necessitatibus deleniti corrupti aperiam. A beatae illo placeat sunt id, voluptates expedita.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tenetur ad velit aperiam at eius iure. Pariatur necessitatibus deleniti corrupti aperiam. A beatae illo placeat sunt id, voluptates expedita.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio tenetur ad velit aperiam at eius iure. Pariatur necessitatibus deleniti corrupti aperiam. A beatae illo placeat sunt id, voluptates expedita.
          </p>
        </div>
        <button className='bg-red-400 rounded-md py-2 px-4 font-bold hover:bg-red-700 hover:text-white'>Order now!!!</button>
      </div>
      <div>
        {
          isLoadedDataProduct.isLoaded ?
          isLoadedDataProduct.productList.map((p) => {
            return (
              <HomeCart key={p._id} image={p.image_product} name={p.name_product} price={p.proce} category={p.category} />
            )
          }) 
          : <p>Loading</p>
        }
      </div>
    </div>
  )
}

export default Home
