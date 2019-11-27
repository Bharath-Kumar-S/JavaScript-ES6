const swap2numbers = (x, y) => {
    // x = x + y;
    // y = x - y;
    // x = x - y;

    // x = x * y;
    // y = x / y;
    // x = x / y;

    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    console.log(`${x} and ${y}`);
}

swap2numbers(3, 5);