# JEST Fresh

JEST fresh project for learning JEST.

Initial Setup:
```
npm i jest
npm i @types/jest
```

Test:
```
npm test
npm run test
npm run test-watch
npm run test-coverage
npm run test-fat
```

Example:
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