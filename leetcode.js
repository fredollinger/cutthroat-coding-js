// Given a pair of Roman numerals, determine if there is a lower numberal in front of it
var isRomanLower = function(s) {
    console.log("isRomanLower() [" + s + "]")
    var roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    return roman[s[1]] > roman[s[0]];
}

// Given a roman numeral, convert it to an integer
var romanToInteger = function(s) {
    var roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var res = 0;

    // for(let i = s.length-1; i >= 0; i--) {
    for(let i = 0; i < s.length; i++) {
        // If the next numeral is lower than the one before, we need to 
        // subtract its value from the total.
        console.log(i + "/" + s[i]);
        if (i > 0 && isRomanLower(s[i-1] + s[i])) {
            // console.log(s[i] + s[i+1]);
            res = roman[s[i]] - res;
        }
        else {
            res = res + roman[s[i]];
        }
        /*
        if (isRomanLower(s[i] + s[i-1])) {
            res = res + (roman[s[i]] - roman[s[i+1]]);
        }
        // Otherwise, add it.
        else {
            res = res + roman[s[i]];
        }
        */
    }
    console.log(res);
    return res; 
};

module.exports = {
    isRomanLower,
    romanToInteger
}
