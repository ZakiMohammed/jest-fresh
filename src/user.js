const dataAccess = require('./db')

const getUsers = () => {
    return dataAccess.getAll();
}

module.exports = {
    getUsers
};
