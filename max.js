/*
* returns the largest element in a list
* @param (array) - a list of integers
* @returns (int) - @param's largest integer
*/

// the function has 3 logical issues
function largest(list) {
    var max = 0;
    for (var i = 0; i < list.length - 1; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

// fixing it
function largefix(list) {
    var max = list[0]; // otherwise, for arrays of negative integers, the function would always return 0
    for (var i = 0; i <= list.length - 1; i++) { // with < the function would skip the last item in the array
        if (list[i] > max) {
            max = list[i];
        }
    }
    console.log(max);
    return max;
}

list = [ -10, -5 , -3];

largefix(list);