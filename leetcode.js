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
    romanToInteger
}
