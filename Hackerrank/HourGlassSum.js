// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let Sum = [];
    let HourGlassSum = 0;
    let output = [];
    let max = 0;

    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            HourGlassSum = 0;
            HourGlassSum += arr[i - 1][j - 1];  
            HourGlassSum += arr[i - 1][j];
            HourGlassSum += arr[i - 1][j + 1];    // three elements of top
            HourGlassSum += arr[i][j];           // middle element
            HourGlassSum += arr[i + 1][j - 1];  // three elements of bottom
            HourGlassSum += arr[i + 1][j];
            HourGlassSum += arr[i + 1][j + 1];
            Sum.push(HourGlassSum);             // Save to the sum array
        }
    }
    output = selectionSort(Sum);
    max = output.pop()
    return max;
}


function selectionSort(arr) {
    var minIdx, temp,
        len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}