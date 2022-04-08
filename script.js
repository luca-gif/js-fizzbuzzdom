for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        // il numero è divisibile per tre
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

    let container = document.querySelector(".container");

    container.append(i);
}