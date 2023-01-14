import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Checking } from '../../components/Checking';
import { getProduct } from '../../helpers/products/getProduct';
import { ShoopingLayout } from '../../ui/ShoopingLayout';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { postReview } from '../../helpers/reviews/postReview';
import { Rating } from 'primereact/rating';

export const SelectedProductPage = () => {


    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const [quanity, setQuanity] = useState(1);
    const [review, setReview] = useState('');
    const [rating, setRaiting] = useState(1);

    const createReview = async () =>{
        if(review==''){
            return
        }
        console.log(rating)

        let reviewObj = {
            raiting: rating,
            text: review,
            productId: params.id
        }

        const response = await Promise.resolve(postReview(reviewObj));
        setRaiting(1)
    }

    useEffect(() => {
        getProductById();
    }, [createReview]);

    const getProductById = async () => {
        const response = await Promise.resolve(getProduct(params.id));
        setProduct(response);
        setIsLoading(false);
      };

  return (
    <ShoopingLayout>
        {
            isLoading
            ?
            <Checking/>
            :
            <div className='container-p'>

                <div className='product-container'>
                    <div className='product-basic'>
                        <img className='image-product' alt="cover" src={product.photoUrl} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className='product-cart'>
                        <div className='price-counter'>
                            <h3>Precio :{product.price}$</h3>
                            <h3>Vendidos :{product.salesCounter}</h3>
                        </div>
                        <h2>Categoría: {product.category.name}</h2>
                        <p>{product.category.description}</p>
                        <div className="p-fluid grid formgrid">
                            <div className="field col-12 md:col-3">
                                <label  htmlFor="integeronly"><b>Cantidad</b></label>
                                <InputNumber style={{marginTop:10}} inputId="integeronly" value={quanity} onValueChange={(e) => setQuanity(e.value)} />
                            </div>
                        </div>
                        <Button style={{marginTop:50}} label="Agregar al carrito" icon="pi pi-check" />
                    </div>
                </div>
                <div className='reviews-section'>
                    <h2>Reseñas</h2>
                    {
                        product.reviews.map((review, index)=>(
                            <div key={review.id} style={{display:'flex'}}>
                                <img className='image-review' alt="cover" src="https://cdn-icons-png.flaticon.com/512/25/25634.png" />
                                <div style={{display:'column'}}>
                                    <h6>Fecha : {review.created}</h6>
                                    <p>{review.text}</p>
                                    <Rating  style={{marginTop:20}} value={review.raiting} cancel={false}/>   

                                </div>
                            </div>
                        ))
                    }

                    <span className="p-float-label" style={{marginTop:20}}>
                        <InputText style={{width:'95%'}} id="reseña" value={review} onChange={(e) => setReview(e.target.value)} />
                        <label htmlFor="reseña">Reseña</label>
                    </span>
                    <Rating  style={{marginTop:20}} value={rating} cancel={false} onChange={(e) => setRaiting(e.value)} />   

                    <Button onClick={createReview} style={{marginTop:50}} label="Enviar reseña" icon="pi pi-check" />

                </div>
                            
            </div>
        }
    </ShoopingLayout>
  )
}
