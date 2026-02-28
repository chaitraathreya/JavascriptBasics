// const → fixed credentials & threshold
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

// Input attempts (password attempts only for simplicity)
const loginAttempts = ["wrong", "wrong", "wrong", "correct"];

// var → global strike counter (function/global scoped)
var failedAttempts = 0;

// let → loop variables
let index = 0;
let isLocked = false;

do {
  let attemptNumber = index + 1;
  let enteredPassword = loginAttempts[index];

  // If account already locked
  if (isLocked === true) {
    console.log(
      `Attempt ${attemptNumber}: 🔒 ACCOUNT LOCKED - Rejected`
    );
    index++;
    continue;
  }

  // Validate credentials
  if (
    VALID_EMAIL === "admin@testingacademy.com" &&
    enteredPassword === VALID_PASSWORD
  ) {
    console.log(
      `Attempt ${attemptNumber}: ✅ LOGIN SUCCESSFUL`
    );
    break;
  } else {
    failedAttempts++;
    console.log(
      `Attempt ${attemptNumber}: ❌ FAILED - Strike ${failedAttempts}/${MAX_ATTEMPTS}`
    );
  }

  // Lock account if threshold reached
  if (failedAttempts === MAX_ATTEMPTS) {
    isLocked = true;
    console.log("🚨 ACCOUNT LOCKED");
  }

  index++;

} while (index < loginAttempts.length);