// Complete the braces function below.
function braces(values) {
  console.log(`input: ${values}`);
  // constants
  const notBalanced = 'NO';
  const balanced = 'YES';

  // aux 
  let stack = [];
  const open = {
      '{' : '}',
      '[' : ']',
      '(' : ')',
  }

  const closed = {
      '}' : true,
      ']' : true,
      ')' : true,
  }

  // return 
  let returnArray = [];

  values.forEach(value => {
      let cantBalance = false;        

      for (let i = 0; i < value.length; i++) {
          let character = value[i];
          cantBalance = false;
          if (open[character]) {
              stack.push(character); 
          } else if (closed[character]) {
              if (open[stack.pop()] != character) {
                  returnArray.push(notBalanced);
                  cantBalance = true;
                  break; 
              }
          }
      }        
      
      if (!cantBalance) {                     
          stack.length == 0 ? returnArray.push(balanced) : returnArray.push(notBalanced);
      }       

      stack = []; 
  });

  return returnArray;
}