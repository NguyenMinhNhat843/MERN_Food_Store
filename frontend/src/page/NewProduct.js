import React, { useState } from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { ImageToBase64 } from '../utility/imageToBase64';
import { toast } from 'react-hot-toast'

const NewProduct = () => {
  const [dataProduct, setDataProduct] = useState({
      name_product: "trái kiwi",
      category: "",
      image_product: "",
      price: "100",
      description: 'trái này ngon vãi nồi'
  })

  const handlImageProduct = async (e) => {
    const data = await ImageToBase64(e.target.files[0])

    setDataProduct(pre => {
      return {
        ...pre,
        image_product: data
      }
    })
  }
  const handlOnChangeData = (e) => {
    const {name, value} = e.target

    setDataProduct((pre) => {
      return {
        ...pre,
        [name]: value
      }
    })
  }
  const handlOnSubmit = async (e) => {
    e.preventDefault()
    const { name_product, category, image_product, price, description } = dataProduct

    if(name_product && category && image_product && price && description) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/new_product`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(dataProduct)
      })
      const fetchRes = await fetchData.json()

      toast(fetchRes.message)
      if(fetchRes.success) {
        setDataProduct(() => {
          return {
            name_product: "",
            category: "",
            image_product: "",
            price: "",
            description: ''
          }
        })
      }
    } else {
      toast('Please enter required field')
    }

  }


  return (
    <div className='w-1/3 min-w-lg  m-auto mt-5 shadow-sm drop-shadow-md rounded-md overflow-hidden'>
      <form className='bg-white p-3 m-auto' onSubmit={handlOnSubmit}>
        <div className='my-3'>
            <label htmlFor="name_product block ">Name product:</label>
            <input type="text" name='name_product' id='name_product' className='bg-slate-300 rounded-md w-full p-2 mt-2' 
              onChange={handlOnChangeData}
              value={dataProduct.name_product}
            />
        </div>
        <div className='my-3'>
            <label htmlFor="category block ">Category</label>
            <select name="category" id="category" className='w-full p-2 bg-slate-300 rounded-md outline-none mt-2'
              onChange={handlOnChangeData}
              value={dataProduct.category}
            >
                <option value={"select"}>Select category</option>
                <option value="fruits">Fruits</option>
                <option value="vegetable">Vegetable</option>
                <option value="icream">Icream</option>
                <option value="dosa">Dosa</option>
                <option value="pizza">Pizza</option>
            </select>
        </div>
        <div className='my-3'>
            <label htmlFor="image_product block ">Image:</label>
            <label htmlFor="image_product">
              <div className='cursor-pointer text-6xl h-40 bg-slate-300 w-full rounded-md mt-2 flex justify-center items-center'>
                  {
                    dataProduct.image_product ? 
                    <img src={dataProduct.image_product} alt="" className='w-full h-full rounded-md'/> :
                    <MdOutlineCloudUpload />
                  }
              </div>
              <input type="file" id='image_product' name='image_product' accept='image/*' className='hidden' onChange={handlImageProduct}/>
            </label>
        </div>
        <div className='my-3'>
            <label htmlFor="price block ">Price:</label>
            <input type="text" name='price' id='price' className='bg-slate-300 rounded-md w-full p-2 mt-2' 
              value={dataProduct.price}
              onChange={handlOnChangeData}
            />
        </div>
        <div className='my-3'>
            <label htmlFor="description block">Description:</label>
            <textarea name="description" id="description" cols="30" rows="5" className='resize-none bg-slate-300 rounded-md w-full'
              onChange={handlOnChangeData}
              value={dataProduct.description}
            ></textarea>
        </div>
        <div className='flex justify-center'>
            <button type='submit' className='bg-red-500 rounded-md py-3 w-full font-bold text-white text-2xl'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default NewProduct

