// One comparison intentionally disagrees with the stated rule.
const learnerCount = 7;
const kitCount = 7;
const deskIsOpen = true;

if (!deskIsOpen) {
  console.log("The desk is closed.");
} else if (kitCount >= learnerCount) {
  console.log("Enough kits.");
} else {
  console.log("More kits needed.");
}
//at least as many kits as learners, so the comparison should be >= instead of >.//
//if we hadn't run throught the different scenarios, we would have thought that the comparison was correct.//
//even though we had that comparison right off the bat. I hope I'm submitting my homework correctly.//
//on GitHub.//