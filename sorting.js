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
    return arr;
}

module.exports = {
    BubbleSort,
    SelectSort,
    AreArraysEqual
}

/* Test function. Remove after we prove this works. */
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
