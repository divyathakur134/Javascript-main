const name = "Divya";
const marks = 23;

console.log(name[0])
//console.log(name + marks + "value")

console.log(`My name is ${name} and i got ${marks} marks out of 25`);

const user = new String('Anuj-an-tha');
console.log(user[0])

// console.log(user[0]);
// console.log(user.__proto__);


// console.log(user.length);
// console.log(user.toUpperCase());
console.log(user.charAt(2));
console.log(user.indexOf('t'));

const newString = user.substring(0, 4)
console.log(newString);

const anotherString = user.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   divya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://divya.com/divya%20thakur"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(user.split('-'));