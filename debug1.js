// let n=require("readline-sync");
// let choose_ascii=(n.question("enter number: "));
// var ascii_char=97+choose_ascii
// for (var i=97;i<=ascii_char;i++) {
//        console.log(chr(i),end="");
// }




// Debug this code****




let n=require("readline-sync");
let choose_ascii=(n.questionInt("enter number: "));
var ascii_char=97+choose_ascii;
for (var i=97;i<ascii_char;i++) {
       console.log(String.fromCharCode(i));
}