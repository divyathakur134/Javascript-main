
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

for(i=1; i<=10; i++){
    //console.log(`print the value of inner loop ${i}`);
    for(j=1; j<=10; j++){
        //console.log(` print value ${j}`);
        //console.log(i + '*' + j + ' = ' + i*j );
    }
}

const MyArray = ['apple','mango','grapes','banana'];
 //console.log(MyArray.length)
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    //console.log(element);
}

for(i=1; i<=20; i++){
    if(i == 5){
       // console.log("5 is detected");
    break;
}
    //console.log(`Value of i is ${i}`);

}

for(i=1; i<=20; i++){
    if(i == 5){
        console.log("5 is detected");
    continue;
}
    console.log(`Value of i is ${i}`);

}


