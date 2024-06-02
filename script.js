import { squareRoot } from './mathUtils.js';

document.getElementById('greetButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const greeting = document.getElementById('greeting');
    const result = document.getElementById('result');

    greeting.innerText = 'Hello, world!';

    if (number !== '') {
        const sqrtValue = squareRoot(number);
        result.innerText = `The square root of ${number} is ${sqrtValue}`;
    } else {
        result.innerText = 'Please enter a number.';
    }
});

