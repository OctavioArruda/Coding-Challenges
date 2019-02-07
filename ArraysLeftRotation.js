// Complete the rotLeft function below.
function rotLeft(a, d) {
    let frontNum = 0;

    if (a.length === 0) return output;

    for (let rotations = 0; rotations < d; rotations++){    // d times rotation
        frontNum = a.shift();   // takes the first element of array, put it on the frontNum var
        // and deletes it from array.
        a.push(frontNum);   // push it onto the last position of array
    }

    return a;
}