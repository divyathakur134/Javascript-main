//-------------Conversion -------------
let score = "23";

//console.log(typeof(score));

let newNUM = Number(score);
//console.log(typeof(newNUM));


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Divya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "divya" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//-------------Operations-------------

let str1 = "Divya";
let str2 = " Thakur";
let str3 = str1 + str2;
console.log(str3);

 //console.log("1" + 2); 12
 //console.log(1 + "2");  12
 //console.log("1" + 2 + 2); 122
 //console.log(1 + 2 + "2"); 32

 // console.log(+true); //1
//console.log(+"");  //0
let x = 2;
y = ++x;
 //console.log(x,y); // (3,3)

let a = 2;
b = a++;
console.log(a,b); //(3,2)



