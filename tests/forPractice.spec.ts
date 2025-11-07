import {test, expect} from '@playwright/test';

test ('monitor', async({request})=>{

const response= await request.get('https://restful-booker.herokuapp.com/apidoc/index.html#api-Ping-Ping');
while(true){
const status=response.status();
console.log(`print ${status}`);
}
})