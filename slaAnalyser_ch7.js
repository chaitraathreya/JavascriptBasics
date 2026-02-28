// Input data
const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

// Initial values
let index = 0;
let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let totalTime = 0;
let slaBreaches = 0;

// Analyze response times using while loop
while (index < responseTimes.length) {
  let current = responseTimes[index];

  // Min / Max comparison
  if (current < minResponse) {
    minResponse = current;
  }

  if (current > maxResponse) {
    maxResponse = current;
  }

  // SLA breach check
  if (current > SLA_LIMIT) {
    slaBreaches++;
  }

  totalTime += current;
  index++;
}

// Calculations
const totalRequests = responseTimes.length;
const averageResponse = (totalTime / totalRequests).toFixed(2);
const breachPercentage = ((slaBreaches / totalRequests) * 100).toFixed(2);

// Overall status
const overallStatus =
  slaBreaches > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";

// Performance Report
console.log("===== PERFORMANCE SLA REPORT =====");
console.log(`Total Requests  : ${totalRequests}`);
console.log(`Min Response    : ${minResponse}ms`);
console.log(`Max Response    : ${maxResponse}ms`);
console.log(`Avg Response    : ${averageResponse}ms`);
console.log(`SLA Breaches    : ${slaBreaches} (${breachPercentage}%)`);
console.log(`Overall Status  : ${overallStatus}`);