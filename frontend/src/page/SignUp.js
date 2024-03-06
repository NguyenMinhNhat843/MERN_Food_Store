import React, { useState } from 'react'
import loginSignUpImage from '../assest/login-animation.gif'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from 'react-router-dom'



const SignUp = () => {
  const [showPassWord, setShowPassWord] = useState(false)
  const [showConfirmPassWord, setShowConfirmPassWord] = useState(false)
  const [dataForm, setDataForm] = useState({
      firstName: 'Nguyễn',
      lastName: 'Minh Nhật',
      email: 'nhat@gmail.com',
      password: '123456789',
      confirmPassword: '123456789'
  })

  const handlerShowPassWord = () => {
    setShowPassWord(pre => !pre)
  }
  const handlerShowConfirmPassWord = () => {
    setShowConfirmPassWord(pre => !pre)
  }

  const handlerOnChange = (e) => {
      const {name, value} = e.target
      setDataForm(pre => {
          return {
              ...pre,
              [name]: value
          }
      })
  }

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        const {firstName, lastName, email, password, confirmPassword } = dataForm
        if(firstName && lastName && email && password && confirmPassword ) {
            if(password === confirmPassword) {
                alert('Successfully!!!')
            } else {
                alert('Password and confirm password is not equal')
            }
        } else {
            alert('Please enter required field')
        }
    }

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm m-auto bg-white flex flex-col items-center p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={loginSignUpImage} alt="" className='w-full'/>
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handlerSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500' 
                value={dataForm.firstName}
                onChange={handlerOnChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500' 
                value={dataForm.lastName}
                onChange={handlerOnChange}
            />

            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500' 
                value={dataForm.email}
                onChange={handlerOnChange}
            />

            <label htmlFor="password">Pass Word</label>
            <div className='flex  bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-500'>
              <input type={!showPassWord ? "password" : "text"} id='password' name='password' className='w-full bg-slate-200 outline-none ' 
                  value={dataForm.password}
                  onChange={handlerOnChange}
              />
              <span className='flex text-2xl cursor-pointer' onClick={handlerShowPassWord}>
                {
                  showPassWord ?
                  <BiSolidHide /> :
                  <BiSolidShow /> 
                }
                </span>
            </div>

            <label htmlFor="confirmPassword">Confirm Pass Word</label>
            <div className='flex  bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-500'>
              <input type={!showConfirmPassWord ? "password" : "text"} id='confirmPassword' name='confirmPassword' className='w-full bg-slate-200 outline-none ' 
                  value={dataForm.confirmPassword}
                  onChange={handlerOnChange}
              />
              <span className='flex text-2xl cursor-pointer' onClick={handlerShowConfirmPassWord}>
                {
                  showConfirmPassWord ?
                  <BiSolidHide /> :
                  <BiSolidShow /> 
                }
                </span>
            </div>

            <button type='submit' className='max-w-[150px] w-full px-2 py-1 mt-3 font-medium text-2xl rounded-full bg-red-500 hover:bg-red-700 m-auto cursor-pointer text-white'>Sign up</button>
        </form>
        <p className='mt-3'>Already have account ? <Link to={"/login"} className='text-red-500 underline'>login</Link></p>
      </div>
    </div>
  )
}

export default SignUp
