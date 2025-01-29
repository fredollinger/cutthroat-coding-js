var BubbleSort2 = function(arr) {
    var done = true;
    while(!done) {
        var i;
        for(i = 0; i < arr.length -1; i++) {
            if (arr[i] > arr[i+1]) {
                var tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i] = tmp;
                done = false;
            }
        }
    }
    return arr;
}

// Tell if two arrays are equal
function AreArraysEqual(arr1, arr2) {
    if (null == arr1 || null == arr2) {
        return false;
    }

    if (arr1.length != arr2.length) {
        return false;
    }

    var i;
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}
// Given an array, arr, find the index of the lowest element
function getLowestIndex(start, arr) {
    lowestIndex = start;
    var i;
    for (i = start; i < arr.length; i++) {
        if (arr[i] < arr[lowestIndex]) {
            lowestIndex = i; 
        }
    }

    return lowestIndex;
}

function SelectSort(arr) {
    var sorted = true;
    var currentIndex = 0; // index of where to put the current lowest number
    var lowIndex = 0;
    var low = arr[0];
    var currValue = arr[0];
    var i;
    for (i = 0; i < arr.length; i++) {
        lowIndex = getLowestIndex(i, arr); 
        low = arr[lowIndex];
        currentValue = arr[i];
        arr[lowIndex] = currentValue;
        arr[i] = low;
    }
    return arr;
}

var BubbleSort = function(arr) {
    var done = false;
    var i = 0;
    var c = 0;
    while(!done) {
        done = true;
        i = 0;
        for(i = 0; i < arr.length - 1; i++) {
            console.log("LOOP: " + c + ": " + i);
            // if the 1st is bigger than the 2nd element, swap them
            if (arr[i] > arr[i+1]) {
                var tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i+1] = tmp
                done = false;
                console.log(i + ": " + arr[i] + ">" + arr[i+1]);
            }
            console.log("loops: " + c + ": " + arr);
        }
        c = c + 1;
    }
    return arr;
}

module.exports = {
    BubbleSort,
    BubbleSort2,
    SelectSort,
    AreArraysEqual
}

/* Test function. Remove after we prove this works. */
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
