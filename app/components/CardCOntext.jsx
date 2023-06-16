"use client"

import {CartProvider} from "use-shopping-cart"


 
const CardCOntext = ({children}) => {
  return ( <CartProvider cartMode="checkout-session" stripe= {process.env.PUBLIC_KEY} >{children} </CartProvider>
   )
}

export default CardCOntext


