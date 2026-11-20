const activityName = "Space observation";
const capacity = 10;
const registered = 10;
const seatsLeft = capacity - registered;
const hasSeats = seatsLeft > 0;

console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}

//The initial code returns an output of "The activity is full."//
//The prediction and output at 10 will be "The activity is full.//
//I was wrong. It returned an output of "A seat is available."//
//It should be registered minus capacity to determine if there are seats left.//
//  If registered is equal to capacity, then there are no seats left. The code// 
// should be updated to reflect this logic.//
//I changed the code to see if I registered minus capacity and realized that my logic//
//was incorrect. I changed the equality to a loose equality and that wasn't the solution.//
//I changed the seats left to be greater than zero and it didn't work. Changed the else //
//Condition and it worked. I mad it much more difficult than it needed to be.//
//  I should have just changed the else condition to check if registered is equal to capacity.//
