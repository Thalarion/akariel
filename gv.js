//should return numbers from 1 to 100 and for numbers
// - divisible by 3 return A
// - divisible by 5 return B
// - divisible by both 3 a 5 return AB

function multitudes() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("AB");
        }
        else if (i % 3 == 0) {
            console.log("A");
        }
        else if (i % 5 == 0){
            console.log("B");
        }
        else {
            console.log(i);
        }
    }   
}

multitudes();