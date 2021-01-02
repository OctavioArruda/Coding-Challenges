// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    // index:   0   1   2   3   4   
    // position:1   2   3   4   5
    // number:  1   3   2   5   4
    let swaps = 0;
    let size = arr.length;
    let sorted = arr.slice();
    let temp = 0;

    sorted = mergeSort(sorted);

    for (let i = 0; i < size - 1; i++) {
        if (arr[i] !== sorted[i]) {
            for (let j = i + 1; j < size; j++) {
                if (arr[j] === sorted[i]) {
                    /* swapping */
                    temp = arr[i];
                    arr[i] = sorted[j];
                    arr[j] = temp;
                    swaps++;
                    break;
                }
            }
        }
    }

    return swaps;
}

function mergeSort(arr) {
    var len = arr.length;
    if (len < 2)
        return arr;
    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}