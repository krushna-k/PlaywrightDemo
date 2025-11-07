
//both type and initial value
var employeeName:string='ganesh';

console.log(employeeName);

//only the type
var employeeName1:string;  // type
employeeName1="john";  // initial value


// only initialise  the value
var employeeName2='john'

//without type and inital value

var employeeName3;
employeeName3='john';

// var variable we can access in that function or block only not outside the function also we can updatye the varibale value

var x=100; // global variable
function somefn(){

    if(true){
        var x=100;
        console.log(x)
    }
    console.log(x)
}
console.log(x)

//let keyword only within the block

//Data types- there are two types of data type 1) inbulit and 2)user defined 

var person_age:number=20;

if (person_age>=20){

    console.log('ready for merriage')
}
else { console.log('ready not for merriage')

}



var a:number=20;
var b:number=30;
var c:number=40;

if (a>b && a>c){

    console.log('a is larger')
}
else if(b >a && b>c){
    console.log('b is larger')
}
else {
    console.log('c is larger');
}

var x:number=30;
var y:number=90;


x>y?console.log('x is grater'): console.log('y is greater');


var weekNo:number=1;

switch(weekNo){

    case 1: console.log("sunday");break;
    
}

var i:number=10;

while(i<=10){

    console.log(i)
    i++;
}

//do while loop

do {
    console.log(i);
    i++
}
while(i<=10)

    for (var i:number=10; i<=10; i++){
        if(i==5){

            break;
        }

        console.log(i)
    }

    //there are two functin
    // named functon

    function display(){
        console.log("welcome to enyty")
    }

    display()


    function sum( a:number,b:number):number{

        return (a + b)
    }

    const res=console.log(sum(100, 200))
    // anonymous fuction

    var gretiing=function(){

        console.log("jdjdjdjdjdjd")
    }

    gretiing()


    //anonymous function with parameter or argument

    var sum1=function(x:number, y:number){

        return(x +y)
    }
    console.log(sum(100,200))
;

 function Greet (greting:string, name:string):string{

    return (greting+ '  ' +name)
 }

console.log( Greet('welcme', 'rucha'))
   function Vijat(name:string, data?:string):string{

     return (name+ ' ' +data)
   }
    Vijat('rucika' ,'docter')
//fat arrow function

var summ= (x:number , y:number):number =>{

    return (x + y)
}


var Print =()=>{


}


// functio overloading
 function add(x:Number, y:number){
  return (x+y)

 }

 add(1000, 200)


 function Greetqq(greetigmsg:string, ...name:string[]){

    return greetigmsg+"  " +name;
 }
 
 
