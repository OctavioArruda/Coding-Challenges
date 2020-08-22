function birthdayCakeCandles(ar) {
  const sortedAr = ar.sort((a, b) => b - a);
  const maxValue = sortedAr[0];
  const blownedCandles = sortedAr.filter(cur => cur == maxValue).length;
  
  return blownedCandles;
}