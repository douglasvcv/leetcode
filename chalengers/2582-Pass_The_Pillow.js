var passThePillow = function(n, time) {
    let i = 1,
        k = 1;
    while (time-- > 0) {
        i += k;
        if (i === 1 || i === n) {
            k *= -1;
        }
    }
    return i
};
