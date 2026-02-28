// Maximum retry attempts
const MAX_RETRIES = 5;

let attempt = 0;
let success = false;

do {
  attempt++;

  // Simulate API call (40% chance of success)
  const randomValue = Math.random();
  success = randomValue > 0.6;

  console.log(
    `Attempt ${attempt}: ${success ? "✅ API call successful" : "❌ API call failed"}`
  );

} while (!success && attempt < MAX_RETRIES);

// Final result
if (success) {
  console.log(`🎉 API succeeded after ${attempt} attempt(s).`);
} else {
  console.log("🚫 API failed after maximum retry attempts. Escalate issue.");
}