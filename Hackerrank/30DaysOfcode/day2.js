// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost * (tip_percent / 100);
  const tax = meal_cost * (tax_percent / 100);
  const total_cost = Math.round(meal_cost + tip + tax);
  console.log(total_cost);
}