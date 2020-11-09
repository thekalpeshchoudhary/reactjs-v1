import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props){
    return (
        <div className="m-4 overflow-hidden border rounded justify-center">

            <Link to={`/product/${props.product.id}`}>
               <div 
                  style={{'backgroundImage':`url(${props.product.images[0].imageUrl})`}}
                  className="w-full h-64 bg-cover bg-blue-100" 
               >
               </div>
            </Link>
            <div className="p-2">
               <h1 className="text-2xl font-bold mb-3">
                  {props.product.name}
               </h1>
               <div className="font-bold text-xl mb-3">
                  $ {props.product.price}
               </div>
               <div>
                  {props.product.description}
               </div>
            </div>
            <Link to={`/product/${props.product.id}`}>
               <button className="btn bg-blue-500 text-white p-4 w-full">View</button>
            </Link>
        </div>
    )
}

export default ProductCard