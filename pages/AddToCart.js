exports.AddToCart=

class AddToCart{

    constructor(page){
        this.page=page;
        this.NoOfProduct='//tbody[@id="tbpdyid"]/tr/td[2]';


    }

    async CheckProductIncart(productName){
      const productInCart=await this.page.$$(this.NoOfProduct)

      for(const product of productInCart){

        console.log(await product.textContent())
        if(productName=== await product.textContent()){

            return true;
            break;
        }
      }
    }
}