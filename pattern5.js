// Try to print this pattern

// 1 2 3 4 5

// 1 2 3 4

// 1 2 3

// 1 2

// 1


var i=5;
while (i>=1){
    var j=1;
    var c="";
    while (j<=i){
        c+=j
        j++
    }
    i--
    console.log(c);
}