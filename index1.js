function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Validate that inputs are numbers
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject('Both inputs must be numbers.');
            return;
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Error: Division by zero.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Error: Invalid operation. Please use +, -, *, or /.');
        }
    });
}

// Example usage:
calculate(10, 5, '+')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(10, 0, '/')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(10, 5, '%')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));