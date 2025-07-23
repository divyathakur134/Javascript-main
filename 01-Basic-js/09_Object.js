
const mySym = Symbol("key1")
const employee = {
    name: 'Divya',
    age: 18,
    location: "Jaipur",
    [mySym]: "mykey1",
    email: "divya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}


console.log(employee);

console.log(employee.age ='27');
console.log(employee);

// console.log(employee.email)
// console.log(employee["email"])
// console.log(employee["full name"])
// console.log(employee[mySym])

employee.email = "divya@chatgpt.com"
// Object.freeze(JsUser)
employee.email = "divya@microsoft.com"
// console.log(JsUser);

employee.greeting = function(){
    console.log("Hello JS user");
}
employee.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(employee.greeting());
console.log(employee.greetingTwo());