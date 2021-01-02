// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // variables
    let output = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            if (typeof ar[j] !== 'undefined' && typeof ar[i] !== 'undefined' && ar[j] == ar[i]) {
                console.log('ar[j]: ' + ar[j] + '| ar[i] ' + ar[i]);
                count++;
                ar.splice(j, 1);
                j--;
                ar.splice(i, 1);
                i--;
                console.log('arr:' + ar + 'count number: ' + count);
            }
        }

    }

    output = Math.floor(count);

    return output;
}