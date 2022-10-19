const calculate = require('./calculate')

describe('Calculate', () => {
    describe('Sum', () => {
        it('should add num 1 and num 2', () => {
            // arrange
            const expected = 30;

            // act
            const received = calculate.sum(10, 20);

            // assert
            expect(received).toBe(expected);
        })

        it('should be null if num 1 is null', () => {
            const expected = null;
            const received = calculate.sum(null, 20);
            expect(received).toBe(expected);
        })

        it('should be null if num 2 is null', () => {
            const expected = null;
            const received = calculate.sum(10, null);
            expect(received).toBe(expected);
        })

        it('should be null if num 1 or num 2 is string', () => {
            const expected = null;
            const received = calculate.sum('10', '20');
            expect(received).toBe(expected);
        })

        it('should be null if num 1 or num 2 is negative', () => {
            expect(() => {
                calculate.sum(-10, -20);
            }).toThrowError('Cannot add negative numbers');
        })
    });

    describe('Sub', () => {
        it('should sub num 1 and num 2', () => {
            const expected = -10;
            const received = calculate.sub(10, 20);
            expect(received).toBe(expected);
        })
    })
})