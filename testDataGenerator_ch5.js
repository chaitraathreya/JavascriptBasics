// var → global counter (function/global scoped)
var globalUserCounter = 1;

// const → fixed values (should not change)
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];
const EMAIL_DOMAIN = "@testingacademy.com";

// input
const TOTAL_USERS = 8;

// Generate users using for loop
for (let i = 1; i <= TOTAL_USERS; i++) {
  // let → loop-scoped variables
  let userId = `USR-${String(globalUserCounter).padStart(4, "0")}`;
  let name = `TestUser_${i}`;
  let email = `testuser${i}${EMAIL_DOMAIN}`;
  let role = ROLES[(i - 1) % ROLES.length];

  // Every 3rd user inactive
  let status = i % 3 === 0 ? "INACTIVE" : "ACTIVE";

  console.log(
    `${userId} | ${name} | ${email} | ${role} | ${status}`
  );

  globalUserCounter++;
}