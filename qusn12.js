// Write a program to take 10 user input, and print the sum of that 10 inputs.

// Note:
// For this program you need to initialize with 50, and try to use decrement and run loop.



var sum=0;
for (var i=50;i>40;i--){
    var n=require("readline-sync");
    var num = n.questionInt("enter number ");
    sum=sum+num
}
console.log(sum);