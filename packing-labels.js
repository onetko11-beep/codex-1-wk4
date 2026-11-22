function getLabelTotal(kitCount, spareCount) {
  // This prints a total but fails to give that value back to the call site.
  console.log(kitCount + spareCount);

return kitCount + spareCount;

}

const labels = getLabelTotal(28, 2);
console.log("Labels to prepare:", labels);
console.log("If one more spare is needed:", labels + 1);

//Ran the node command and got the following output:
// 9
// Labels to prepare: undefined
// If one more spare is needed: NaN
// changed the inputs on getLabelTotal to 5, 2
// It returns 7 trying 9, 2 that ouput seems right, but it is not
//returning the additional label in the output.
// The issue is that the function getLabelTotal does not return a value; 
// it only logs the total to the console. To fix this, you need to return 
// the total from the function.
//error kit count undefined
//my return was outside of the curly braces, moving it inside the function will fix the issue.
//Cool! Now all I have to do is remember how to do that in the future.