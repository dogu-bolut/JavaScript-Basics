let ourForm = document.getElementById("todoInput");
let ourField = document.getElementById("todoItem");
let ourList = document.getElementById("todoList");

ourForm.addEventListener("submit", e => {
    e.preventDefault(); // e short for event
    createItem(ourField.value);
});

function createItem(item) {
    let htmlCode = `<li>${item} <button onclick="deleteItem(this)">Delete</button></li>`;
    ourList.insertAdjacentHTML("beforeend", htmlCode);
    ourField.value = "";
    ourField.focus();
}

function deleteItem(item) {
    item.parentElement.remove();
}