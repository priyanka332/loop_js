var n=require("readline-sync");
var num=n.questionInt("enter any number ");
var i=1;
while (i<=num){
    var j=1;
    var s="";
    while (j<=i){
        s+=i
        j++
    }
    i++
    console.log(s)
}