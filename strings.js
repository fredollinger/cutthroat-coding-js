// Tell if two arrays are equal
function CamelCase(str) {
    var res = str.toLowerCase().charAt(0);
    for (let i = 1; i < str.length; i++) {
        if ("-" == str.charAt(i)) {
            i = i + 1;
            res = res + str.toUpperCase().charAt(i);
        }
        else {
            res = res + str.charAt(i);
        }
    };

    return res;
}

module.exports = {
    CamelCase
}
