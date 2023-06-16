 
 "use client"
 
import Image from "next/image"
import {stripe} from "../../../utils/connectStripe"
import { getProductsFRomStripe } from "../page"
 




export async function getTheDatasPath(){
  const myData=await  stripe.products.list()
  const paths=myData.data.map(product=>({
    params:{id:product.id}
  }))
  return {
    paths,
  }
 

}











const ProductPage = async ({params}) => {
  
  const products=await getProductsFRomStripe()
  const myproduct=products.find(product=>product.id===params.id)
 
  
  
  
 



 

 


 
 

  
  return (
    <div className="flex w-1/2 my-11 m-auto bg-slate-200 justify-center  shadow-lg ">
      <Image src={myproduct.image} width={200} height={200}/>
      <hr />
      <p className="mx-11"> {myproduct.name} </p>
     
      <p>{myproduct.price}</p>
      <button>Add To Cart</button>
      
    </div>
  )
}

export default ProductPage



























{
  /*
  








  export const getProductsFRomStripe=async()=> { 
   const pro=await stripe.products.list()
  
 
 
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





 const myproducts= getProductsFRomStripe()





  
 const Productdetail = async({params}) => {


  console.log(product)


   return (
     <div>Productdetail</div>
   )
 }
 
 export default Productdetail



   */
}