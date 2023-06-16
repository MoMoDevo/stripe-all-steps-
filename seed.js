 
const Stripe=require("stripe")

const products=require("./product")
 const stripe=Stripe("sk_test_51NBR5bHJ3FFaaqaxV3cXccmYZfkVoB8WTvlW2u5A42RVeNyIgi779kLR1G0uu5zn384emvkEADqMaEizDmqBOos200phBrEaWO");

(async()=>{
    for (const product of products){
        const stripeProducts=await stripe.products.create({
            name:product.name,
          default_price_data:{
            currency:product.currency,
            unit_amount_decimal:product.price
          },
          images:[product.image]






        }
        
        )}
 





})()