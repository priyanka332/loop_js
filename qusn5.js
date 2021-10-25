var n = require("readline-sync");
var a = n.question("enter any string ");
const store = a;
var s = "";
for (var i=a.length-1;i>=0;i--){
    s=s+a[i]
}
if (s===a){
    console.log("it is palindrome no.");
}
else{
    console.log("it is not palindrome no.");
}