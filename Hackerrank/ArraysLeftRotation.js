// Complete the rotLeft function below.
function rotLeft(a, d) {
    let frontNum = 0;

    if (a.length === 0) return output;

    for (let rotations = 0; rotations < d; rotations++) {    
		
        frontNum = a.shift();          
        a.push(frontNum);   
    }

    return a;
}