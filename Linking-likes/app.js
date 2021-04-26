let num = 0;

function like() {

    num++;
    console.log(num, 'result')
    document.querySelector(".like").innerHTML = num + " like(s)";
}