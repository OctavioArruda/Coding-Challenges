// Complete the repeatedString function below.
function repeatedString(s, n) {
    let count = 0;
    let short = 0;
    let aTimes = 0;
    let remainder = 0;
    let miniString = '';
    let reptimes = 0;
    console.log('count: ' + count);

    for (let i = 0; i < s.length; i++){
        if (s[i] === 'a') {
            aTimes++;
        }
    }

    reptimes = Math.floor(n / s.length); 
    // this will give us how much times we can put s into n
    count = aTimes * reptimes; // multiply how much a's we have in s with how much times s we put into n
    console.log('count: ' + count + ' aTimes: ' + aTimes + ' reptimes: ' + reptimes);
    if (n % s.length !== 0) {
        remainder = n % s.length;
        miniString = s.slice(0, remainder);
        for (let i = 0; i < remainder; i++){
            if (miniString[i] === 'a') {
                count++;
            }
        }
    }
    console.log('count at end: ' + count);
    return count;
}

/* Tip: You gotta think about the problem and try to solve it wisely, not using brute strengh!! 
Math way is win way. */ 