function staircase(n) {
  let stairs = '';

  for (let i = 1; i <= n; i++) {
      // draw the stairs from top to bottom
      // repeat whitespaces until reaches the last step
      // repeat steps i times until i equals n 
      stairs += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
  }

  console.log(stairs);
}