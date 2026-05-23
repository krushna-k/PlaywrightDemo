import {test,expect,Page,Locator} from '@playwright/test';

export  class orangeDashBoard{

    readonly page:Page;
    readonly VeriDashBoard:Locator;
    readonly itemMenu:Locator;

    constructor(page:Page){

        this.page=page;
        this.VeriDashBoard=page.locator('//h6[@class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
        this.itemMenu=page.locator('//ul[@class="oxd-main-menu"]/li')


    }
    async VeryDashboard(){
        await this.VeriDashBoard.waitFor({state:"visible"})

    }
    async veryfyItem(expectdMenu:string[]){
        const actualItems= await this.itemMenu.allTextContents();
        for (const menu of expectdMenu){

        await expect(actualItems).toContain(menu)
        }


    }

}