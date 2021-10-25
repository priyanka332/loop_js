// Print the maximum number in between the numbers given by user



// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
 
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//    let num=c.question("enter number: ")
//    lis.append(num)
// }
// var maxi=lis[0];
// for (let j=0;j<lis:length;j==) {
//    if (maxi<lis[j]) {
//        [maxi=lis[j]]
//    }
 
// }
// console.log(maxi)




// Debug this code****




let c=require("readline-sync");
let loop_time=c.questionInt("enter loop time: ");
 
let lis=[]
for (let i=1;i<=loop_time;i++) {
    let num=c.questionInt("enter number: ")
    lis.push(num)
}
console.log(lis);
var max=lis[0];
for (let j=0;j<lis.length;j++){
    if (max<lis[j]){
        [max=lis[j]]
    }
}
console.log(max)