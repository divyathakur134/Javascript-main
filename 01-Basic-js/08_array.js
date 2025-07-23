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

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
