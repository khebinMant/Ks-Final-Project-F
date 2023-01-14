import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CategoryPage } from '../pages/admin/CategoryPage'
import { LoginPage } from '../pages/login/LoginPage'
import { ProductPage } from '../pages/admin/ProductPage'
import { MainPage } from '../pages/customer/MainPage'


export const MainRouter = () => {

  const [isLoged, setIsLoged] = useState(true)

  return (
    <Routes>
        {
          isLoged
          ?
          <>
            {/* Si esta logeado y es ADMIN */}
            <Route path='/*' element={<ProductPage/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/categories' element={<CategoryPage/>}/>
            
            {/* Si esta logeado y es USER */}
            <Route path='/main' element={<MainPage/>}/>
          </>
          :
          <Route path='/login' element={<LoginPage/>}/>

        }

    </Routes>
  )
}
