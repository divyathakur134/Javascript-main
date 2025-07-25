// for of

// ["", "", ""]
// [{}, {}, {}]

const Numbers = [2,4,6,8,10]
for (const num of Numbers){
    // console.log(num);
}

const greeting = "Hii I m Divya";
for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map();
map.set('IN','India')
map.set('CA','Cananda')
map.set('UK','United Kingdom')
map.set('Fr','France')

// console.log(map);

for(const [key,value] of map){
    //console.log(key, ":-",value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//for (const [key, value] of myObject) {
  //console.log(key, ':-', value);
    
 //}