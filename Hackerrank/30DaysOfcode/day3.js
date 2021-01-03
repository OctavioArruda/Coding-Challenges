function main() {
  const N = parseInt(readLine(), 10);
  printNumberWeird(N);
}

const weird = 'Weird';
const notWeird = 'Not Weird';

const printNumberWeird = number => {
  if(checkNumberIsOdd(number)) 
      console.log(weird);
      
  if (checkNumberIsEven(number) && checkNumberIsInTheFirstRange(number)) 
      console.log(notWeird);
   
  if (checkNumberIsEven(number) && checkNumberIsInTheSecondRange(number)) 
      console.log(weird)
  
  if (checkNumberIsEven(number) && checkNumberIsGreaterThan20(number))
      console.log(notWeird);
}

const checkNumberIsOdd = number => number % 2 != 0;
const checkNumberIsEven = number => number % 2 == 0;
const checkNumberIsInTheFirstRange = number => number >= 2 && number <= 5;
const checkNumberIsInTheSecondRange = number => number >= 6 && number <= 20;
const checkNumberIsGreaterThan20 = number => number > 20;