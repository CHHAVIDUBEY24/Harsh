// const score=200;
// console.log(score);

// const balance=new Number(400.8999);//here we have explicitily defined that we require number and we even get additional functionality 
// console.log(balance)

// console.log(balance.toString.length) // here we have converted the number to string to get additional functionality of string

// console.log(balance.toFixed(2))//decimal ke baad kitni value chahiye 

// const val=139.77789;
// console.log(val.toPrecision(4))//overall kitni value chahiye before and after decimal dono include kr ke

// const hundreds=100000000;

// console.log(hundreds.toLocaleString());//adds commas by-default us standard
// console.log(hundreds.toLocaleString('en-IN'))

// // -----------------Maths-------------------------

// console.log(Math); //object 
// console.log(Math.abs(-9)) //gives only positive value
// console.log(Math.round(6.88888)) 
// console.log(Math.ceil(4.1)) //next greater number (if decimal is there)
// console.log(Math.floor(4.5)) //previous smaller number 
// console.log(Math.min(1,2,3,4))
// console.log(Math.max(1,2,3,4,))
// console.log(Math.pow(4,4))

console.log(Math.random())//hamesha random value generate krega btw 0 and 1

console.log(Math.floor(Math.random()*10)+1) // isme value 0 se badi koi bhi random 1digit number aayega

const min=10;
const max=30;

console.log(Math.floor(Math.random()*(max-min+1)+min))// value range btw max and min

