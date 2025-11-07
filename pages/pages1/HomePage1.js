exports.HomePage1=

class HomePage1 { 

    constructor(page){

        this.page=page;
        this.productList='//*[@id="tbodyid"]/div/div/div/h4/a';
        this.AddTocart="//a[normalize-space()='Add to cart']";
        this.cart='cartur';
    }

    async SelectProductList(productName){
        const productList1= await this.page.$$(this.productList)

        for (const product of productList1){
            if(productName===await product.textContent()){
               await  product.click();
               break;

            }
        }
        await this.page.on('dailog', async dailog=>{
            if(dailog.message().includes('added')){
                await dailog.accept();
            }
        })
        await this.page.locator(this.AddTocart).click();

    }
    async Gotocart(){
        await this.page.locator(this.cart).click();

    }

}