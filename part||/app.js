let num = 0;
let num1 = 0;
let num2 = 0;

function like(n) {
    let counter;
    if (n === 0) {
        num++;
        counter = num;
    } else if (n === 1) {
        num1++;
        counter = num1;
    } else {
        num2++;
        counter = num2;
    }

    console.log(".like" + (n > 0 ? n : ""), 'query')
    document.querySelector(".like" + (n > 0 ? n : "")).innerHTML = counter + " like(s)";
}