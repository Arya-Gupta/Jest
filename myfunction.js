const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    notNull: () => undefined,
    checkValue: (a) => a,
    createUser: () => {
        const user = {firstName : 'Carl'};
        user['lastName'] = 'Johnson';
        return user;
    }
}

module.exports = functions;