import React, { useEffect, useState } from 'react'
import Beach from '../components/firstbeach.js';
import Count from '../components/countbeaches.js';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/loader.js';
import ProductCard from '../components/productcard.js';
import { useAxiosGet } from '../hooks/httpRequests.js';

function Home(){
   const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
   // const [products, setProducts] = useState({
   //    loading: false,
   //    data: null,
   //    error: false
   // })
   
   let products = useAxiosGet(url)

   let content = null
   // useEffect(() => {
   //    setProducts({
   //       loading: true,
   //       data: null,
   //       error: false
   //    })
   //    axios.get(url)
   //       .then(response=>{
   //          setProducts({
   //             loading: false,
   //             data: response.data,
   //             error: false
   //          })
   //       })
   //       .catch(() => {
   //          setProducts({
   //             loading: false,
   //             data: null,
   //             error: true
   //          })
   //       })
   // }, [url])

   if(products.loading){
      content = <Loader></Loader>
   }
   if(products.data){
      content = 
      products.data.map((product, key) => 
         <div key={key}>
            <ProductCard product={product} />
         </div>
      )
   }else if(products.error){
      content = <p>Something went wrong</p>
   }

   return(
      <div>
         <h1 className="text-xl p-2">Home Content</h1>
         {content}
         <Beach name="thekc66"/>
         <Count/>
      </div>
   )
}

export default Home;