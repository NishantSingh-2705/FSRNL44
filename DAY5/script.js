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

function calculateSum(a, b) {
    return a + b;
}

const calBtn = document.getElementById('calculateButton');
calBtn.addEventListener('click', function() {
    try {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid input: Please enter valid numbers.');
        }
        const result2 = calculateSum(num1, num2);
        document.getElementById('result2').textContent = 'Sum: ' + result2;
    } catch (error) {
        document.getElementById('result2').textContent = 'Error: ' + error.message;
    }
})