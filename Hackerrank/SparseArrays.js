// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    /* input checking */
    console.log('input: strings ' + strings);
    console.log('input: queries: ' + queries);

    /* variables */
    let output = []; 
    let index = 0;
    let count = 0;

    /* starting the output with zeros */
    queries.forEach(function (query) {
        output.push(0);
    });

    if (strings.length === 0 || queries.length === 0) return output;

    queries.forEach(function (query) {
        // For each query string, we will check if it's appears on the strings array.
        count = 0;
        strings.forEach(function (string) {
            /* So for each string in the strings array, we will compare each one
            with the the first query, then with the second, and so on. */
            /* Problem: finding the index when the string matches again */
            if (query === string) {
                count += 1;
                output[index] = count; // incrementing the index
            }
        });
        index++;
    });

    return output;
}
