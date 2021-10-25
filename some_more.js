// with keys****


const birds={name:"Bald Eagle",type:"Hawk",ScientificName:"HaliaeetusLeucocephalus"}
          
console.log(Object.keys(birds).length)

// Output: 
// 3
// i.e.  [ 'name', 'type', 'ScientificName' ] 


// Note:-

// Object.keys(objectName) will give you the list of property names.

// Object.values(objectName) will give you the list of values.




// with values****


const birds={name:"Bald Eagle",type:"Hawk",
   ScientificName:"HaliaeetusLeucocephalus"}
          
console.log(Object.values(birds).length)
      

// Output: 
//  3
// i.e.  [ 'Bald Eagle', 'Hawk', 'HaliaeetusLeucocephalus' ]