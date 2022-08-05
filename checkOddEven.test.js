const checkOddEven = require('./checkOddEven');

test('10 is even', () => {
    expect(checkOddEven(10)).toBe("even");
})

test('11 is odd', () => {
    expect(checkOddEven(11)).toBe("odd");
})