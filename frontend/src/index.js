import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Menu from './page/Menu'
import Login from './page/Login'
import SignUp from './page/SignUp'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewProduct from './page/NewProduct'
import { store } from './redux/index';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} >
              <Route index element={<Home />}></Route>
              <Route path='/menu' element={<Menu />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/new_product' element={<NewProduct />}></Route>
              <Route path='/sign_up' element={<SignUp />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
