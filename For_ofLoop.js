let names=["komal","shweta","rani","swati","mahi","shanti","sarmistha"]
for(let lname of names){
   console.log(lname);
}

// Output: 
// komal
// shweta
// rani
// swati
// mahi    
// shanti
// sarmistha



// 2nd**



console.log("                         ");
console.log("                         ");

arr=["a","b","g","r","t"]
for(let character of arr){
    console.log(character);
}

// Output:

// a
// b
// g
// r
// t   



// 3rd**



console.log("                            ");
console.log("                            ");

number_list=[23,"maan",67,"gouri",90,45,34]
for(let num of number_list){
console.log(num);
}

// Output: 

// 23
// maan
// 67
// gouri        
// 90
// 45
// 34



// 4th**



console.log("                           ");
console.log("                           ");

let obj={"name":"sharmistha","age":21,"hobby":"watching movie","goal":"fullstack_developer"}
for(let prop of obj){
   console.log(prop)
}
 

//  Output:

// TypeError: obj is not iterable.

// The for of loop doesn’t work with an object because it only works with arrays. 
// If you want to iterate over the properties(key,value pair) of the object,
// you can use for in loop.