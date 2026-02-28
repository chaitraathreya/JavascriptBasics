// Array of test results after test suite execution
const testResults = ["pass", "fail", "pass", "skip", "pass", "fail"];

// Counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Count results using for loop
for (let i = 0; i < testResults.length; i++) {
  switch (testResults[i]) {
    case "pass":
      passCount++;
      break;
    case "fail":
      failCount++;
      break;
    case "skip":
      skipCount++;
      break;
  }
}

// Calculations
const totalTests = testResults.length;
const passRate = ((passCount / totalTests) * 100).toFixed(2);

// Verdict logic
let verdict;
if (failCount === 0) {
  verdict = "READY FOR RELEASE ✅";
} else if (failCount <= 2) {
  verdict = "REVIEW REQUIRED ⚠️";
} else {
  verdict = "BLOCK RELEASE ❌";
}

// Test Report
console.log("===== TEST EXECUTION REPORT =====");
console.log(`Total Tests : ${totalTests}`);
console.log(`Passed      : ${passCount}`);
console.log(`Failed      : ${failCount}`);
console.log(`Skipped     : ${skipCount}`);
console.log(`Pass Rate   : ${passRate}%`);
console.log(`Verdict     : ${verdict}`);