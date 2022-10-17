function Power(base, exponent) {
    if (exponent === 1) {
        return base;
    }
    return base * Power(base, exponent - 1);
}

Power(2, 4);