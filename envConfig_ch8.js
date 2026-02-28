// Input
const envName = "staging";

// Assembled config (will be set via switch)
let baseURL;
let apiKey;
let timeout;
let description;

// Switch-based environment configuration
switch (envName) {
  case "dev":
    baseURL = "https://dev-api.testingacademy.com";
    apiKey = "dev_key_xxxx-xxxx";
    timeout = 5000;
    description = "Development - Local testing";
    break;

  case "qa":
    baseURL = "https://qa-api.testingacademy.com";
    apiKey = "qa_key_xxxx-xxxx";
    timeout = 7000;
    description = "QA - Functional & regression testing";
    break;

  case "staging":
    baseURL = "https://staging-api.testingacademy.com";
    apiKey = "stg_key_xxxx-xxxx";
    timeout = 8000;
    description = "Staging - Pre-production mirror";
    break;

  case "production":
  case "prod":
    baseURL = "https://api.testingacademy.com";
    apiKey = "prod_key_xxxx-xxxx";
    timeout = 10000;
    description = "Production - Live environment";
    break;

  default:
    throw new Error("❌ Invalid environment name");
}

// Output
console.log("===== TEST ENVIRONMENT CONFIG =====");
console.log(`Environment : ${envName.toUpperCase()}`);
console.log(`Base URL    : ${baseURL}`);
console.log(`API Key     : ${apiKey}`);
console.log(`Timeout     : ${timeout}ms`);
console.log(`Description : ${description}`);