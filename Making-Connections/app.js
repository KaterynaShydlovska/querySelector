function remove(n) {
    console.log('#remove' + n)
    document.querySelector('#remove' + n).style.display = "none";
}


function changeName() {
    let curName = document.querySelector('.name').textContent;
    console.log(curName, 'name')
    if (curName === "Angela Smith") {
        curName = "Kateryna Shydlovska"
    } else {
        curName = "Angela Smith";
    }
    document.querySelector('.name').textContent = curName;
}