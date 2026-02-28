// Simulated element state (as returned by automation frameworks)
const isPresent = true;
const isDisplayed = true;
const isEnabled = false;

// Determine element state
let elementState;

if (isPresent === false) {
  elementState = "NOT FOUND";
} else if (isPresent === true && isDisplayed === false) {
  elementState = "HIDDEN";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  elementState = "DISABLED";
} else if (isPresent === true && isDisplayed === true && isEnabled === true) {
  elementState = "READY";
}

// Determine severity using ternary operator
const severity =
  isPresent === false
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
      ? "WARNING"
      : "OK";

// Recommended QA action
const action =
  elementState === "READY"
    ? "Proceed with interaction"
    : elementState === "DISABLED"
      ? "Check business rules or enable condition"
      : elementState === "HIDDEN"
        ? "Wait or verify UI visibility"
        : "Fail test and report defect";

// Output
console.log("===== UI ELEMENT VALIDATION REPORT =====");
console.log(`State    : ${elementState}`);
console.log(`Severity : ${severity}`);
console.log(`Action   : ${action}`);