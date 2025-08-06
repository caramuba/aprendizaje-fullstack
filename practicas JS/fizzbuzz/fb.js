for (let i = 1; i <= 100; i = i + 1) {
    let devolucion = "";
    if (i % 3 === 0 && i % 5 === 0) {
        devolucion += "fizzbuzz";
    } else if (i % 5 === 0) {
        devolucion += "buzz";
    } else if ( i % 3 === 0) {
        devolucion += "fizz";
    } else {
        devolucion += i;
    }
    devolucion = devolucion + ", ";
    console.log(devolucion);
}

