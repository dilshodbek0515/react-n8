import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Compane from '../pages/compane/Compane'
import Dastafka from '../pages/dastafka/Dastafka'
import Vozvrat from '../pages/vozvrat/Vozvrat'
import Garant from '../pages/garant/Garant'
import Contact from '../pages/contact/Contact'
import Blog from '../pages/blog/Blog'
import Home from '../pages/home/Home'
import Catalog from '../pages/catalog/Catalog'
import Error from '../pages/error/Error'
import Service from '../pages/service/Service'
import ProductPage from '../pages/productPage/ProductPage'
import Heart from '../pages/heart/Heart'
import Tovar_p from '../pages/tovar_page/Tovar_page'
import Cart from '../pages/cart/Cart'
import Layout from '../pages/layout/Layout'
import Admin from '../pages/admin/Admin'
import CreateProduct from '../pages/admin/createProduct/CreateProduct'
import ManageProduct from '../pages/admin/manageProduct/manageProduct'
import Auth from '../pages/auth/Auth'
import Login from '../pages/login/Login'

const Routesone = () => {
  const [language, setLanguage] = useState('RU')
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout language={language} setLanguage={setLanguage} />}
        >
          <Route path='/' element={<Home language={language} />} />
          <Route path='/compane' element={<Compane language={language} />} />
          <Route path='/dastafka' element={<Dastafka language={language} />} />
          <Route path='/vozvrat' element={<Vozvrat language={language} />} />
          <Route path='/garant' element={<Garant language={language} />} />
          <Route path='/contact' element={<Contact language={language} />} />
          <Route path='/blog' element={<Blog language={language} />} />
          <Route path='/catalog' element={<Catalog language={language} />} />
          <Route path='/service' element={<Service language={language} />} />
          <Route path='/heart' element={<Heart language={language} />} />
          <Route path='/tovar' element={<Tovar_p language={language} />} />
          <Route path='/cart' element={<Cart language={language} />} />
          <Route
            path='/product/:id'
            element={<ProductPage language={language} />}
          />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error language={language} />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />}>
            <Route path='createProduct' element={<CreateProduct />} />
            <Route path='manageProduct' element={<ManageProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default Routesone
