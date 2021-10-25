// Try to print this pattern

// 1

// 1 2

// 1 2 3

// 1 2 3 4

// 1 2 3 4 5


var i=1;
while (i<=5){
    var j=1;
    var c="";
    while (j<=i){
        c+=j
        j++
    }
    i++
    console.log(c);
}