const userBusiness = require('./user-business')
const db = require('./db')

describe('User Business', () => {

    it('should get users', () => {
        const expected = [
            { id: 1001, name: 'Allen'}
        ];
        const spyGetAll = jest.spyOn(db, 'getAll');
        
        spyGetAll.mockImplementation(() => {
            return expected
        });

        const received = userBusiness.getUsers();
        expect(received).toEqual(expected);
    });

})