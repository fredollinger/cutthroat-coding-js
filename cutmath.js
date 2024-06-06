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

var romanToInteger = function(s) {
    const roman = {};
    roman["I"] = 1;
    roman["V"] = 5;
    var res = 0;

    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        res = res + roman[s[i]];
    }
    console.log(res);
    return res; 
};

module.exports = {
    FibonacciSequence,
    twoSum,
    romanToInteger
}
