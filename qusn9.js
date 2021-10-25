// Create am will go like this. Each time using readline loop that takes 10 numbers as input from the user.

// After taking the input console the sum of all those numbers.

// This progra-sync will take a number input from the user.


var sum=0;
for (var i=1;i<=10;i++){
    var n=require("readline-sync");
    var num=n.questionInt("enter any number ");
    sum=sum+num
    console.log(sum)
}



// 2nd**



// var sum=0;
// for (var i=1;i<=10;i++){
//     var n=require("readline-sync");
//     var num=n.questionInt("enter any number ");
//     sum=sum+num
// }
// console.log(sum)