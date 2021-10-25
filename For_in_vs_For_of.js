// Example of For in**

let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];

// cmpKey are the property keys
for (let cmpKey in Navgurukul) {
 console.log(cmpKey);
}


// Output:

// 0
// 1
// 2



// 2nd**


const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let pro in campus){
 console.log(campus[pro])
}

// Output:

// Bangalore_campus
// 2016
// three_months



// Example of For of**



let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];
// cmpValue are the property values
for (let cmpValue of Navgurukul) {
    console.log(cmpValue)
}


// Output:

// Pune
// Bangalore
// Sarjapur



// 2nd**



const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let pro of campus){
    console.log(pro)
}


// Output:

// It will throw an error because for of can’t iterate through objects.


// The for of loop doesn’t work with an object because it only works with arrays. 
// If you want to iterate over the properties(key,value pair) of the object,
// you can use for in loop.