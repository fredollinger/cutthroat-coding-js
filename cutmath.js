function FibonacciSequence(i) {
    let res = 0;
    if (0 == 1) {
        return res;
    }
    for (let step = 0; step < i; step++) {
        res = res + step;
    }
    return res;
}

module.exports = {
    FibonacciSequence
}
