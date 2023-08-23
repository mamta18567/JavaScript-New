function func() {
    let count = 0;
    return function () {
        if (count < 1) {
            console.log("You called me !")
            count++;
        } else {
            console.log("Already called !")
        }
    }
}

const result = func();
result();