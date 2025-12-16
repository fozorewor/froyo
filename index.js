// Prompt user for froyo flavors
const userFlavorInput = prompt(
  "Enter froyo flavors separated by commas:"
);

// Split input string into an array
const flavorArray = userFlavorInput.split(",");

// Function to count flavor frequencies
function countFlavorOrders(flavors) {
  const flavorCounts = {};

  for (let flavor of flavors) {
    if (flavorCounts[flavor]) {
      flavorCounts[flavor] += 1;
    } else {
      flavorCounts[flavor] = 1;
    }
  }

  return flavorCounts;
}

// invoke function and store result
const froyoOrderSummary = countFlavorOrders(flavorArray);

// Log result to console
// console.log("Froyo Order Summary:");
// console.log(froyoOrderSummary);
console.table(froyoOrderSummary);