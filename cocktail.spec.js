const cocktail = require('./cocktail')

describe('Cocktail', () => {

    describe('isHoliday', () => {
        it('should return false for isHoliday', () => {
            const received = cocktail.isHoliday();
            expect(received).toBeFalsy();
        });
    })

    describe('getFruits', () => {

        let fruits = [];

        beforeEach(() => {
            fruits = cocktail.getFruits();
        })

        it('should return fruits', () => {
            const expected = ['Apple', 'Orange', 'Mango'];
            const received = fruits;
            expect(received).toEqual(expected);   // object/array
        });
    
        it('should return Apple as fruit', () => {
            const expected = 'Apple';
            const received = fruits;
            expect(received).toContain(expected);
        });
    
        it('should be more than 3', () => {
            const expected = 3;
            const received = fruits.length;
            expect(received).toBeGreaterThanOrEqual(expected);
        });
    });

    describe('getUser', () => {
        it('should return user', () => {
            const expected = { id: 1, name: 'John' };
            const received = cocktail.getUser();
            expect(received).toEqual(expected);   // object/array
        });
    });

    describe('getSad', () => {
        it('should return null for sad', () => {
            const received = cocktail.getSad();
            expect(received).toBeNull();
        });
    });

    describe('splitNames', () => {
        it('should return first and last name if full name is given', () => {
            const expected = { first: 'John', last: 'Doe' };
            const received = cocktail.splitNames('John Doe');
            expect(received).toEqual(expected);
        });

        it('should return null if full name is null', () => {
            const received = cocktail.splitNames(null);
            expect(received).toBeNull();
        });

        it('should return only first name if only first name is there', () => {
            const expected = { first: 'Allen', last: undefined };
            const received = cocktail.splitNames('Allen');
            expect(received).toEqual(expected);
        });

        it('should return only first name if only first name is there', () => {
            const expected = { first: '', last: 'Woods' };
            const received = cocktail.splitNames(' Woods');
            expect(received).toEqual(expected);
        });
    });

});