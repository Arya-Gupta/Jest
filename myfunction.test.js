const functions = require('./myfunction');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should not be null', () => {
    expect(functions.notNull()).not.toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy();
});

// This test will fail if we use toBe because toBe only works on primitive types
// An object or an array is a reference type in js - two similar looking objects can be stored in 2 different memory locations, so they are treated differently
test('User should be Carl Johnson object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Carl', lastName: 'Johnson'});
});

// In this case we have written the definition of our function within our test
test('Should be under 100', () => {
    const load1 = 50;
    const load2 = 30;
    expect(load1 + load2).toBeLessThan(100);
})

test('Should be less than or equal to 80', () => {
    const load1 = 50;
    const load2 = 30;
    expect(load1 + load2).toBeLessThanOrEqual(80);
})

test('Basketball should be present in sports', () => {
    sports = ['Football', 'Cricket', 'Basketball', 'Tennis'];
    expect(sports).toContain('Basketball');
})