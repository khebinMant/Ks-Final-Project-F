import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { ProductPage } from '../pages/admin/ProductPage'
import { MainPage } from '../pages/customer/MainPage'
import { useDispatch, useSelector } from 'react-redux'
import { SearchProductPage } from '../pages/customer/SearchProductPage'
import { SelectedProductPage } from '../pages/customer/SelectedProductPage'
import { getCurrentCart } from '../store/cart/thunks'
import { CartItemsPage } from '../pages/customer/CartItemsPage'


export const MainRouter = () => {

  const dispatch = useDispatch()

  dispatch( getCurrentCart() )

  const [isLoged, setIsLoged] = useState(true)
  // const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <div>

      {
        isLoged
          ?
          <Routes>
            {/* Si esta logeado y es ADMIN */}
            <Route path='/products' element={<ProductPage />} />

            {/* Si esta logeado y es USER */}
            <Route path='/main' element={<MainPage />} />
            <Route path='/search' element={<SearchProductPage />} />
            <Route path='/product/:id' element={<SelectedProductPage />} />
            <Route path='/cart' element={<CartItemsPage />} />

          </Routes> :
          <Routes>
            <Route path='/login' element={<LoginPage />} />
          </Routes>

      }

    </div>
  )
}
