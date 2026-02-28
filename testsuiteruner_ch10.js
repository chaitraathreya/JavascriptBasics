/***********************
 * GLOBAL / CONFIG
 ***********************/

// const → fixed values
const TEST_TYPES = {
  strictEqual: "strictEqual",
  looseEqual: "looseEqual",
  typeCheck: "typeCheck",
  truthy: "truthy",
  lessThan: "lessThan"
};

// var → global counters (legacy + interview relevance)
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// Test cases input
const testCases = [
  { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
  { name: "Loose equality check", actual: "5", expected: 5, type: "looseEqual" },
  { name: "Response is object", actual: {}, expected: "object", type: "typeCheck" },
  { name: "Feature flag enabled", actual: true, expected: true, type: "truthy" },
  { name: "Response time under SLA", actual: 420, expected: 500, type: "lessThan" }
];

// let → loop scoped variables
let results = [];

/***********************
 * TEST EXECUTION (for loop)
 ***********************/
for (let i = 0; i < testCases.length; i++) {
  const tc = testCases[i];
  let passed = false;
  let reason = "";

  try {
    switch (tc.type) {
      case TEST_TYPES.strictEqual:
        passed = tc.actual === tc.expected;
        reason = `${tc.actual} === ${tc.expected}`;
        break;

      case TEST_TYPES.looseEqual:
        passed = tc.actual == tc.expected;
        reason = `${tc.actual} == ${tc.expected}`;
        break;

      case TEST_TYPES.typeCheck:
        passed = typeof tc.actual === tc.expected;
        reason = `typeof ${typeof tc.actual} === ${tc.expected}`;
        break;

      case TEST_TYPES.truthy:
        passed = !!tc.actual === true;
        reason = `Boolean(${tc.actual}) === true`;
        break;

      case TEST_TYPES.lessThan:
        passed = tc.actual < tc.expected;
        reason = `${tc.actual} < ${tc.expected}`;
        break;

      default:
        throw new Error("Unknown comparison type");
    }

    // ternary operator
    passed ? passCount++ : failCount++;

    results.push({
      name: tc.name,
      status: passed ? "PASS" : "FAIL",
      reason
    });

  } catch (err) {
    errorCount++;
    results.push({
      name: tc.name,
      status: "ERROR",
      reason: err.message
    });
  }
}

/***********************
 * WHILE LOOP
 * Consecutive passes from start
 ***********************/
let consecutivePasses = 0;
let idx = 0;

while (idx < results.length && results[idx].status === "PASS") {
  consecutivePasses++;
  idx++;
}

/***********************
 * DO...WHILE LOOP
 * Find first failure
 ***********************/
let firstFailureIndex = -1;
let j = 0;

do {
  if (results[j].status !== "PASS") {
    firstFailureIndex = j;
    break;
  }
  j++;
} while (j < results.length);

/***********************
 * REPORTING
 ***********************/
const totalTests = testCases.length;
const passRate = ((passCount / totalTests) * 100).toFixed(2);

// ?? nullish coalescing
const firstFailureName =
  results[firstFailureIndex]?.name ?? "NONE";

// logical operators && ||
const overallStatus =
  passCount === totalTests
    ? "✅ PASSED"
    : (failCount > 0 || errorCount > 0)
      ? "❌ FAILED"
      : "⚠️ UNSTABLE";

/***********************
 * OUTPUT
 ***********************/
console.log("===== MINI TEST SUITE REPORT =====");

for (let i = 0; i < results.length; i++) {
  const prefix = results[i].status === "PASS" ? "✅" :
                 results[i].status === "FAIL" ? "❌" : "⚠️";

  console.log(
    `${prefix} TC-${String(i + 1).padStart(2, "0")}: ${results[i].name} → ${results[i].status} (${results[i].reason})`
  );
}

console.log("----------------------------------");
console.log(`Total Tests          : ${totalTests}`);
console.log(`Passed               : ${passCount}`);
console.log(`Failed               : ${failCount}`);
console.log(`Errors               : ${errorCount}`);
console.log(`Pass Rate            : ${passRate}%`);
console.log(`Consecutive Passes   : ${consecutivePasses}`);
console.log(`First Failure        : ${firstFailureName}`);
console.log(`Overall Result       : ${overallStatus}`);