// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = countFruitsFeltInHouse(apples, s, t, a);
  let orangesCount = countFruitsFeltInHouse(oranges, s, t, b);
  
  printFruitsFeltinHouseNumber(applesCount, orangesCount);
}

const countFruitsFeltInHouse = (fruitArray, houseStart, houseEnd, treeLocation) => {
  let fruitCount = 0;
  
  fruitArray.forEach(fruit => {
     const fruitRange = fruit + treeLocation; 
     
      if (fallInHouse(fruitRange, houseStart, houseEnd)) {
          fruitCount++;
      }
  });
  
  return fruitCount;
}

const fallInHouse = (feltPlace, houseStart, houseEnd) => {
  return feltPlace >= houseStart && feltPlace <= houseEnd;
}

const printFruitsFeltinHouseNumber = (apples, oranges) => {
  console.log(apples);
  console.log(oranges);
}