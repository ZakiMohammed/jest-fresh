const isHoliday = () => false

const getFruits = () => ['Apple', 'Orange', 'Mango']

const getUser = () => ({ id: 1, name: 'John' })

const getSad = () => null

const splitNames = fullName => {
    if (!fullName) return null

    const [first, last] = fullName.split(' ')
    return { first, last }
}

module.exports = {
    isHoliday,
    getFruits,
    getUser,
    getSad,
    splitNames
}