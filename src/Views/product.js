import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/loader.js';
import { useAxiosGet } from '../hooks/httpRequests.js';


function Product(){
   const { id } = useParams()
   const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
   // const [product, setProduct] = useState({
   //    loading: false,
   //    data: null,
   //    error: false
   // })
   let product = useAxiosGet(url)
   
   let content = null
   
   // useEffect(() => {
   //    setProduct({
   //       loading: true,
   //       data: null,
   //       error: false
   //    })
   //    axios.get(url)
   //       .then(response=>{
   //          setProduct({
   //             loading: false,
   //             data: response.data,
   //             error: false
   //          })
   //       })
   //       .catch(() => {
   //          setProduct({
   //             loading: false,
   //             data: null,
   //             error: true
   //          })
   //       })
   // }, [url])
   if(product.loading){
      content = <Loader></Loader>
   }
   if(product.data){
      content = 
         <div className="justify-center">
            <h1 className="text-2xl font-bold p-8">
               {product.data.name}
            </h1>
            <div className="flex justify-center">
               <img
                  src={product.data.images[0].imageUrl}
                  alt={product.data.name}
               />
            </div>
            <div className="text-xl p-8 mb-3">
               <div className='font-bold'>
                  $ {product.data.price}
               </div>
               <div>
                  {product.data.description}
               </div>
            </div>
         </div>
   }else if(product.error){
      content = <p>Something went wrong</p>
   }
   return(
      <div>
         <h1 className="text-xl p-2">This is Product Page</h1>
         {content}
      </div>
   )
}

export default Product;