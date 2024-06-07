function FibonacciSequence(i) {
    let res = 0;
    if (0 == i) {
        return 0;
    }
    if (1 == i) {
        return 1;
    }
    res = 1;
    last = 0;
    for (let step = 1; step < i; step++) {
        j = res;
        res = res + last;
        last = j;
        // console.log(step, last, res);
    }
    return res;
}

var twoSum = function(nums, target) {

};

module.exports = {
    FibonacciSequence,
    twoSum
}

