"use client"
 import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
 import { toast } from "react-hot-toast"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
 

const ProductCard = ({product}) => {
  const {addItem}=useShoppingCart()
  const price = formatCurrencyString({
    value: product.price,
    currency: product.currency,
    
  })
 
  const addtoCart=(event)=>{
    event.preventDefault()
     
    addItem(product)
    toast.success(`succecfully added ${product.name} to the cart`)

  }
 
 
  return (
    <>
    <div className='h-52 w-52'>
    <Image src={product.image} width={200} height={100} alt='post.name'/>
                   <Link href={`/products/${product.id}`}>  <p className=' hover:bg-red-50 m-4'>{product.name} </p>   </Link>  
   <p>{price} </p>
   <p>{product.name} </p>


   <button onClick={addtoCart}  className='hover:bg-slate-500'>Add To Cart</button>
    </div>
    </>
  )
}

export default ProductCard