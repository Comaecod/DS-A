function fibonacci(range) {
    if (range <= 3) {
        return 1;
    }
    return fibonacci(range - 1) + fibonacci(range - 2);
}

fibonacci(7);