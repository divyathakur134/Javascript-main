function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))

function CalculateCartPrice(a,b,...num){
    return num;
}
console.log(CalculateCartPrice(2,3,4,5));

const user = {
    name:"divya",
    price:499
}

function HandleObject(anyObject){
 console.log(`My name is ${anyObject.name} and the price is ${anyObject.price}`)
}

HandleObject(user);

const Fruits = ['apple','mango','banana','grapes'];

function HandleArray(anyArray){
    return anyArray[3]
}
console.log(HandleArray(Fruits));