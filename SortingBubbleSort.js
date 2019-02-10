// Complete the countSwaps function below.
function countSwaps(a) {
    
    let swaps = 0;

    // bubble sort code
    let swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
                swaps++;
            }
        }
    } while (swapped);

    console.log('Array is sorted in ' + swaps + ' swaps.');
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[a.length - 1]);

}