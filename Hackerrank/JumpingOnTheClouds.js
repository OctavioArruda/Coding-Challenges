// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    if (c <= 0) return 0;
    let jumps = 0;

    for (let i = 0; i < c.length; i++){
        console.log('i: ' + i);
        if (typeof c[i + 1] === 'undefined') break;
        if (c[i + 1] === 1) {
            /* If we have to surpass a thunderhead we have to doublejump
                If we have two zeros ahead, we can do double jump. */
            i++;
            jumps++;
        } else if (c[i + 1] === 0 && c[i + 2] === 0) {
            /* simple jump when we have a zero ahead */
            i++
            jumps++;
        } else jumps++;
        console.log(' jump: ' + jumps);  
    }

    return jumps;
}

/*
The key: When ou are near the end of array and the array[i + 1] is undefined, you gotta check for it and end 
the loop, so you don't have another jump increment when you face something that isn't a '1' neither a '0'.
*/