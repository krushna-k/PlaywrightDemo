exports.AddToCart1=
class AddToCart1{

    constructor(page){

        this.page=page;
        this.ProductListNo='';

    }

    async ProductNumber(){

    const productlistadded=await this.page.$$(this.ProductListNo)
    for (const product of productlistadded){
console.log(await product.textContent())
        if (productname===await product.textContent()){

            return true;
            break;
        }
    }
    }
}