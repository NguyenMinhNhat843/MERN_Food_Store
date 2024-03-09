import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import { Toaster } from 'react-hot-toast';
import {useDispatch} from 'react-redux'
import { setDataProduct } from './redux/productSlice'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    (async () => {
      const listProduct = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/list_product`)
      const listProductRes = await listProduct.json()
      dispatch(setDataProduct(listProductRes))
    })()
  }, [])

  return (
    <>
      <Toaster />
      <div className = ''>
          <Header />
          <main className='pt-16 bg-slate-300 min-h-[calc(100vh)]'>
            <Outlet />
          </main>
      </div>
    </>
  );
}

export default App;
