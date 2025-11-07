exports.HomePage=

class HomePage{

    constructor(page){

         this.page=page;
         this.ProductList='//*[@id="tbodyid"]/div/div/div/h4/a';
         this.AddTocart="//a[normalize-space()='Add to cart']";
         this.cart='#cartur';


    }

    async AddToProductCart(ProductName){

        const ProductList=await this.page.$$(this.ProductList);
        for (const product of ProductList){
            if(ProductName===await product.textContent()){

                await product.click()
                break;
            }
        }
        await this.page.on('dailog', async dailog=>{
            if (dailog.message().includes('added')){
                await dailog.accept();
            }
        })
 await this.page.locator(this.AddTocart).click();

    }
    async GotoCart(){

        await  this.page.locator(this.cart).click();
        
    }
}

