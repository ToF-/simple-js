document.getElementById('greetButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const greeting = document.getElementById('greeting');
    const result = document.getElementById('result');

    greeting.innerText = 'Hello, world!';

    if (number !== '') {
        result.innerText = `You entered the number: ${number}`;
    } else {
        result.innerText = 'Please enter a number.';
    }
});

