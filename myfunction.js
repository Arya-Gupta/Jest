const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    notNull: () => undefined,
    checkValue: (a) => a,
    createUser: () => {
        const user = {firstName : 'Carl'};
        user['lastName'] = 'Johnson';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
}

module.exports = functions;



// JSONPlaceholder REST API: https://jsonplaceholder.typicode.com/
