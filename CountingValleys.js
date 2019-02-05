// Complete the countingValleys function below.
function countingValleys(n, s) {

    let valleys = 0;
    let sealevel = 0;

    for (let i = 0; i < n; i++){
        if (s[i] === 'D') {
            sealevel--;
        }
        else if (s[i] === 'U') {
            sealevel++;
        }
        if (sealevel === 0 && s[i] === 'U') {
            valleys++;
         }
    }
    return valleys;
}