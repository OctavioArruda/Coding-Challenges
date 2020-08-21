function miniMaxSum(arr) {    
  const sum = arr.reduce((a, b) => a + b);

  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  console.log(`${(sum - maxValue)} ${(sum - minValue)}`);
}