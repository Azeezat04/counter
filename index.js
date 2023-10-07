let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(countEl)

function add() {
    count += 1
    countEl.textContent = count
}

function store() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}