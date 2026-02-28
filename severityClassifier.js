// Inputs from defect analysis
const frequency = "often";   // "always", "often", "rarely"
const impact = "major";      // "blocker", "major", "minor"

let severity;

// Nested if-else classification
if (frequency === "always") {
  if (impact === "blocker") {
    severity = "P0";
  } else if (impact === "major") {
    severity = "P1";
  } else if (impact === "minor") {
    severity = "P2";
  }
} else if (frequency === "often") {
  if (impact === "blocker") {
    severity = "P1";
  } else if (impact === "major") {
    severity = "P2";
  } else if (impact === "minor") {
    severity = "P3";
  }
} else if (frequency === "rarely") {
  if (impact === "blocker") {
    severity = "P2";
  } else if (impact === "major") {
    severity = "P3";
  } else if (impact === "minor") {
    severity = "P4";
  }
} else {
  severity = "UNKNOWN";
}

// Output
console.log("===== BUG SEVERITY REPORT =====");
console.log(`Frequency : ${frequency}`);
console.log(`Impact    : ${impact}`);
console.log(`Severity  : ${severity}`);