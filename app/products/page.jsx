import {stripe} from "../../utils/connectStripe"
import ProductCard from "../components/ProductCard"
 export const getProductsFRomStripe=async()=> { 
  const pro=await stripe.products.list({

    expand:["data.default_price"],
    limit:3,

  })
 


  const allproduct=pro.data.map((product)=>{
    const price=product.default_price
    return{
      currency:price.currency,
      name:product.name,
      id:product.id,
      image:product.images[0],
      price:price.unit_amount
      
    }


  })
  return allproduct
}


const Home = async() => {
  const posts=await getProductsFRomStripe()
 
   
  return (
    <>
    <div className="grid grid-cols-3 m-auto w-max gap-8 p-12">
      {
        posts.map((product)=>{
          return  <ProductCard key={product.id} product={product}  />
        })
      }


    </div>
      </>
  )
}

export default Home
 
