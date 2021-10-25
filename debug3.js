// const result = {
//     success: ["max-length", "no-amd" “prefer-arrow-functions”],
//     failure: ["no-var", "var-on-top", "linebreak"]:
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };


// const success=result.success
// const store=success,length
// for(const value in success){
//     console.log(store[value])
// }




// Debug this code****




const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
 
 
const a=result.success
console.log(a)
for(const value in a){
    console.log(a[value]);
}