const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
registered = registered + 2;
let seatsLeft = capacity - registered;

console.log(activityName);
console.log("Before:", seatsLeft);
console.log("Registered:", registered);
seatsLeft = capacity - registered;
console.log("After:", seatsLeft);
seatsLeft = capacity - registered;

//There should be five chairs left.//
//The code returned 7 chairs left.//
//Registered is + 2 but seatsLeft is not updated.//
// To fix this, we need to recalculate seatsLeft after updating registered.//
//Aha There it is! We need to recalculate seatsLeft after updating registered.//