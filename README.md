# JEST Fresh

JEST fresh project for learning JEST.

# Run Project
```
git clone https://github.com/ZakiMohammed/jest-fresh

npm i

node calculate
node cocktail
node user
node post-main
```

# Initial Setup:
```
npm i jest -D
npm i @types/jest -D
```

# Test Commands:
```
"scripts": {
    "test": "jest",
    "test-watch": "jest --watchAll",
    "test-verbose": "jest --verbose",
    "test-coverage": "jest --coverage",
    "test-fat": "jest --watchAll --coverage --verbose"
},
```
# Test Command Run:
```
npm test
npm run test
npm run test-watch
npm run test-coverage
npm run test-fat
```

# Basic Example:
```
it('should add num 1 and num 2', () => {
    // arrange
    const expected = 30;

    // act
    const received = calculate.sum(10, 20);

    // assert
    expect(received).toBe(expected);
})
```