var unsorted1 = [ 7, 2, 9, 8, 5, 4, 6, 1, 3];
var sorted1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

function isEqual(arr1, arr2) {
    var i;
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

module.exports = {
    unsorted1,
    sorted1,
    isEqual
}
