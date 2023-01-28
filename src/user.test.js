const user = require('./user')
const db = require('./db')

describe('User Business', () => {

    it('should get users', () => {
        const expected = [
            { id: 1001, name: 'Allen'}
        ];
        const spyGetAll = jest.spyOn(db, 'getAll');
        
        spyGetAll.mockImplementation(() => expected);

        const received = user.getUsers();
        expect(received).toEqual(expected);
    });

})