import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CategoryPage } from '../pages/admin/CategoryPage'
import { LoginPage } from '../pages/login/LoginPage'
import { ProductPage } from '../pages/admin/ProductPage'
import { MainPage } from '../pages/customer/MainPage'
import { useSelector } from 'react-redux'


export const MainRouter = () => {

  //const [isLoged, setIsLoged] = useState(true)
  const currentUser = useSelector((state) => state.users.currentUser);




  return (
    <div>

      {
        currentUser
          ?
          <Routes>
            {/* Si esta logeado y es ADMIN */}
            <Route path='/*' element={<ProductPage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/categories' element={<CategoryPage />} />

            {/* Si esta logeado y es USER */}
            <Route path='/main' element={<MainPage />} />

          </Routes> :
          <Routes>
            <Route path='*' element={<LoginPage />} />
          </Routes>


      }




    </div>
  )
}
