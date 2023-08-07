// Arrays: The numbers example.

// 1) Explain How To Call a Function: https://my.learn.co/courses/745/pages/review-functions?module_item_id=95167


// 2)
// function distanceFromHqInBlocks(address) {
//     let distance;   
//     if (address >= 42) {
//     const distance = (address - 42) 
//     console.log(distance)
// } else if (address < 42) {
//     const distance = (42 - address)
//     console.log(distance)
// }
//     return distance;
// }
// distanceFromHqInBlocks(20)

// vs

// function distanceFromHqInBlocks(address) {
//     let distance; // Declare the distance variable here

//     if (address >= 42) {
//         distance = address - 42;
//         console.log(distance);
//     } else if (address < 42) {
//         distance = 42 - address;
//         console.log(distance);
//     }

//     return distance;
// }


// 3)Explain "cb(data):
// function somethingExpensive(cb) {
//   // do something crazy,
//   // like fetching a bajillion websites
//   // then pass their data to the callback:
//   cb(data);
// }
// This approach allows us to separate the execution of the expensive operation from the functions that use the data it returns. We do this by passing whichever function we currently need to somethingExpensive() as a callback. Once the expensive operation is finished, we simply call cb(), passing the data along as an argument.


// 4) Why does this work? (From JavaScript Advanced Functions: First-Class Functions Lab)


function selectDifferentDrivers(drivers, fn1) {
  return fn1(drivers)
}
selectDifferentDrivers("Ahmed", console.log)
selectDifferentDrivers("Ahmed", function(name){
    console.log(name, "is the best driver")
})

// 5) During the compilation phase, a reference to myVar is created in the global scope, and a reference to a different myVar is created in myFunc()'s scope. The global myVar exists in the scope chain for myFunc(), but the engine never makes it that far. The engine finds a matching reference within myFunc(), and it resolves the myVar identifier to 9001 without having to traverse up the scope chain.
