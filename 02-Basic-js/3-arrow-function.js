const user = {
    name: "divya",
    price: 99,
    displayMeassage: function() {
        console.log(`My name is ${this.name} and the price is ${this.price}`)
        console.log(this);
    }

}
user.displayMeassage();
user.name="anuj";
user.displayMeassage()
console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }       if you are using {} in arrow function then you should write the retuen keyword

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  here ()is used because we have not used{} so no need to return, implicitly returning

const addTwo = (num1, num2) => ({username: "divya"}) // here to access object we should use () outside{}


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()