import {expect,test } from '@playwright/test';


test ("API request", async({request})=>{

    const response=await request.get('https://reqres.in/api/users?page=2');

    console.log(await response.json());
    expect ( response.status()).toBe(200);



})
var userid;
test.only("Create request",async({request})=>{

  const response=  await request.post("https://reqres.in/api/users",
                       {
                         data:{
                            "name":"krushna",
                            "job":"tester"
                         },
                         headers:{
                            "Accept":"application/json"
                         }

                       });

      console.log(await response.json());
      //expect(response.status()).toBe(201)
         var res=await response.json()
         userid=res.id              


                            



})
