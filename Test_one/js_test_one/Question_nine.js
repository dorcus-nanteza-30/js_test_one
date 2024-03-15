function printFibonacci(limit) {
    var fib1 = 1;
    var fib2 = 1;
    var fibonacci = fib1 + " " + fib2;

    while (fib2 <= limit) {
        var nextFib = fib1 + fib2;
        if (nextFib <= limit) {
            fibonacci += " " + nextFib;
        }
        fib1 = fib2;
        fib2 = nextFib;
    }

    console.log("Fibonacci Numbers up to " + limit + ":");
    console.log(fibonacci);
}

// Call the function with the limit set to 100
printFibonacci(100);