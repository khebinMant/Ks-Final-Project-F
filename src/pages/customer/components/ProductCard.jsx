import { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { prominent } from 'color.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export const ProductCard = ({product}) => {

  const navigation = useNavigate()
  const [color, setColor] = useState("")
  const [hasCover, setHasCover] = useState(false)

  useEffect(() => {
    getColor()
  }, [])
  
  const getColor = async() =>{
    if(product){
          setHasCover(true)

          const color = await prominent(product.photoUrl, { amount: 1 })
          if(color.toString() === '255,255,255')
          {
            setColor(`RGB(10,10,10)`)
          }
          else{
            setColor(`RGB(${color.toString()})`)
          }
        }
        else{
          setHasCover(false)
        }
  }

  const handleNavigate = () =>{
      navigation(`/product/${product.id}`)
  }
  
  const header = (
    <img className='image-cover' alt="cover" src={hasCover?product.photoUrl:"https://icons.veryicon.com/png/o/miscellaneous/basic-icon-1/unknown-18.png"} />
  );

  return (
    <Box >
    {
      product?
        <Grid 
          xs={2} sm={4} md={2}
          onClick={handleNavigate}
          style={{gap:'15px'}}
        >
            <Card
              className='card-book animate__animated animate__bounceIn'
              title={product.name} 
              style={{ backgroundColor:color}}  
              header={header}
            >
            </Card>
        </Grid>
      :
      <></>
    }
    </Box>
  )
}
