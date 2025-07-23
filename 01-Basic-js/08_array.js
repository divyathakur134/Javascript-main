const user = ['divya','anuj','shannu','diya'];
console.log(user);

const new_user = new Array(1,2,3,4);
console.log(new_user);
console.log(new_user[2]);

// Array methods

// new_user.push(6)
// new_user.push(7)
// new_user.pop()

// new_user.unshift(9)
// new_user.shift()

// console.log(new_user.includes(9));
// console.log(new_user.indexOf(3));

// const newArr = new_user.join()

// console.log(new_user);
// console.log( newArr);


// slice, splice

console.log("A ", new_user);

const myn1 = new_user.slice(1, 3)

console.log(myn1);
console.log("B ", new_user);


const myn2 = new_user.splice(1, 3)
console.log("C ", new_user);
console.log(myn2);
