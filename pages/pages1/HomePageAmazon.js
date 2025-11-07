exports.HomePageAmazon=

class HomePageAmazon{

    constructor(page){
        this.page=page;
        this.search='#twotabsearchtextbox';
        this.clickOnsearchButton='#nav-search-submit-button';
        this.clickonFirstProduct="//span[contains(text(),'VIZIO 40-inch Full HD 1080p Smart TV with DTS Virt')]";


    }

    // async gotoMethod(){
    //     await this.page.goto('https://www.amazon.com/');

    // }
    async searchProduct(productName){

        await this.page.locator(this.search).fill();
        await this.page.locator(this.clickOnsearchButton).click();

    }
    async firstProduct(){

        await this.page.locator(this.clickonFirstProduct).click();
    }
}