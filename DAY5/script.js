const btn = document.getElementById('changeText');
const op = document.getElementById('output');

btn.addEventListener('click', function() {
    op.textContent = "I was changed!!";
});

const btn1 = document.getElementById('clickButton');
const btn2 = document.getElementById('hoverMe');
const result = document.getElementById('result');

btn1.addEventListener('click', function() {
    result.textContent = "This is a click event";
    result.style.color = "red";
})

btn2.addEventListener('mouseover', function() {
    result.textContent = "Mouse Over Done";
    result.style.color = "#279587";
})

const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const listItem = document.getElementById('listItem');

btn3.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = "New List Item";
    listItem.appendChild(newItem);
})

btn4.addEventListener('click', function() {
    const lastItem = listItem.lastElementChild;
    if (lastItem) {
        listItem.removeChild(lastItem);
    }
})