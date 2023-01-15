import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../helpers/products/getAllProducts'
import { getProductByName } from '../../helpers/products/getProductByName'
import { ShoopingLayout } from '../../ui/ShoopingLayout'
import { Box, Grid } from '@mui/material';
import { ProductCard } from './components/ProductCard'
import { Checking } from '../../components/Checking'

export const SearchProductPage = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { searchedProduct } = useSelector( state => state.cart )

  useEffect(() => {
    getProductsResults()
  }, [searchedProduct])


  const getProductsResults = async()=>{
  
    if(searchedProduct!==""){

        const responses = await Promise.resolve( getProductByName(searchedProduct) )
        setProducts(responses)
        setIsLoading(false)
    }
    else{
      const responses = await Promise.resolve( getAllProducts(searchedProduct) )
      setProducts(responses)
      setIsLoading(false)
    }
  }
  

  return (
    <ShoopingLayout>
      {
        searchedProduct!=null && products ?
        <div className='ft-container'>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2,  sm:3, md: 2 }} columns={{ xs: 4, sm: 8, md: 10 }}>
                {
                  products.map((product, index)=>(
                    <ProductCard key={index} product={product}/>
                  ))
                }
                </Grid>
              </Box>
        </div>
        :<Checking/>
      }
    </ShoopingLayout>
  )
}
