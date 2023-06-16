 import { stripe } from "@/utils/connectStripe"
 const getProductsFRomStripe=async()=> { 
  const pro=await stripe.products.list({
    limit:3,

  })
  return pro
}


const Home = async() => {
  const posts=await getProductsFRomStripe()
  console.log(posts)
  
  return (
    <div>Home</div>
  )
}

export default Home
//hello