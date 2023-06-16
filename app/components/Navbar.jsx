 
"use client"
import {BsBagCheck} from "react-icons/bs"

import { formattedTotalPrice,cartCount,useShoppingCart} from "use-shopping-cart"




export const Navbar = () => {
  const {cartCount,formattedTotalPrice}=useShoppingCart()
  return (
    <div className='flex h-12 bg-slate-100 shadow-lg  items-center justify-between px-12 z-10'>
        <div className="flex hover:bg-slate-500 cursor-pointer">LOGO</div>
        <div className="flex justify-center items-center gap-3">
            <div className="cart">
            <BsBagCheck className="font-bold text-40"/>

            </div>
           <p>{cartCount} </p>
           <p>{formattedTotalPrice} </p>
        </div>



    </div>
  )
}
