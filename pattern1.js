// Try to print this pattern

// 1 1 1 1 1

// 2 2 2 2 2

// 3 3 3 3 3

// 4 4 4 4 4

// 5 5 5 5 5



var i=1;
var p=1;
while (i<=5){
    var j=1;
    var s=""
    while (j<=5){
        s+=p
        j++
    }
    console.log(s)
    i++
    p++
}