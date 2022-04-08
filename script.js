for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

    const container = document.querySelector(".container");
    const div = document.createElement("div");

    div.className = "box";

    container.append(div);

    if (i % 3 === 0) {
        div.classList.add("yellow");
        div.append("Fizz!");
    } else if (i % 5 === 0) {
        div.classList.add("red");
        div.append("Buzz!");
    } else {
        div.append(i);
    }

    /* Questo codice nell' Else If non mi funzionava, non capisco il motivo */

    if (i % 3 === 0 && i % 5 === 0) {
        div.classList.add("violet");
    }
}