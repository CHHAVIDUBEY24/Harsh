let score="33abc";
console.log(typeof(score))
let intConvScore=Number(score)
console.log(typeof(intConvScore))
console.log(intConvScore);

// many time the string after conversion to number gives its type as number but actually stores value nan(not a number)

let a=null;
console.log(typeof a);
let b=Number(a);
console.log(b);

let c=undefined;
console.log(typeof c);
let d=Number(c);
console.log(d);

let e=true;
console.log(typeof e);
let f=Number(e);
console.log(f);
// nan(not a number)=>type=number

let i=0;
console.log(typeof i);
let k=Boolean(i);
console.log(k);

let ch="33";
console.log(typeof ch);
let hc=Number(ch);
console.log(hc);

let nc="hello";
console.log(typeof nc);
let cn=Boolean(nc);
console.log(cn);

let ef="";
console.log(typeof ef);
let fe=Boolean(ef);
console.log(fe);