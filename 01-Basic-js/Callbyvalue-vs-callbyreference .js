let num = "one";
let num1 = num;
num1 = "two";

console.log(num,num1);

let user1 = {
    email: "divya@google.com",
    phone: "8877665544",
}
let user2 = user1;
//console.log(user1,user2);

user2.email = "anuj@gmail.com";
console.log(user2);
console.log(user1);