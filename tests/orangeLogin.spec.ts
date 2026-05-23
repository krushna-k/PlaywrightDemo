import {test,expect} from '@playwright/test';
import { orangeLoginA } from '../pages/pages1/orangeLogin';
import { orangeDashBoard } from '../pages/pages1/orangeDashBoard';

test ("test", async({page})=>{
     const logo=new orangeLoginA(page);
     const dashboard=new orangeDashBoard(page)


    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await logo.goto()
      await  logo.LoginMethod('Admin', 'admin123');
      await logo.loginClick();
      await dashboard.VeryDashboard();
      await expect(dashboard.VeriDashBoard).toBeVisible();
      const expectdMenu=[
        'Admin',
        'PIM',
        'Leave',
        'Time',
        'Recruitment',
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',
        'Maintenance',
        'Buzz',
      ];
await expect(dashboard.veryfyItem).(expectdMenu);



})