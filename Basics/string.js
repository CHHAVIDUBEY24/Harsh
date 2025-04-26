const name="Chhavi";
const count=1;
console.log(name + count +"value")
console.log(`hello I am ${name}`)

const surname=new String('Dubey')

console.log(surname[0])
console.log(surname.__proto__);
console.log(surname.length)
console.log(surname.toLocaleUpperCase())
console.log(surname)
console.log(surname.charAt(3))
console.log(surname.indexOf('y'))

const newString=surname.substring(0,2)
console.log(newString)

const anotherString=surname.slice(0,4)
console.log(anotherString)

const anotherString2=surname.slice(-7,4)//0 se hi start kr rha hai neg value ko ignire kr dia
console.log(anotherString2)

const ch="   Chhavi   "
console.log(ch);
console.log(ch.trim());//removes starting and end space of the string=>read about this in mdn

const url="https://chhavi.com/chavvi%50dubey"

console.log(url.replace('%50','-'))//kisko kisse replace krna hai
console.log(url)
console.log(url.includes('harsh'))

const gameName=new String('chhavi-hc-com')

console.log(gameName.split('-'))
