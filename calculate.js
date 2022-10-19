const sum = (num1, num2) => {
    if (!num1 || !num2) {
        return null;
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }
    if (num1 < 0 || num2 < 0) {
        throw Error('Cannot add negative numbers')
    }
    return num1 + num2;
};

const sub = (num1, num2) => num1 - num2;

module.exports = { 
    sum,
    sub 
};