// Try to print this pattern

// 5 5 5 5 5

// 4 4 4 4 4

// 3 3 3 3 3

// 2 2 2 2 2

// 1 1 1 1 1



var i=5;
var p=5;
while (i>=1){
    var j=5
    var s=""
    while (j>=1){
        s+=p
        j--
    }
    console.log(s)
    i--
    p--
}