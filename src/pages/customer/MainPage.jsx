import { ShoopingLayout } from "../../ui/ShoopingLayout"
import { Box, Grid } from '@mui/material';
import { ProductCard } from "./components/ProductCard";
import { getAllProducts } from "../../helpers/products/getAllProducts";
import { useEffect, useState } from "react";
import { Checking } from "../../components/Checking";
import '../../style/Products.css'


export const MainPage = () => {

  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductsResults()
  }, [])

  const getProductsResults = async()=>{
      const responses = await Promise.resolve( getAllProducts() )

      console.log(responses)
      setProducts(responses)
      setIsLoading(false)
  }
  return (
    <ShoopingLayout>
    {
      isLoading
      ?<Checking/>
      :
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
    }

    </ShoopingLayout>
  )
}
