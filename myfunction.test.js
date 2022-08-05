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

// Asynchronous data

Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1); 
    // If we omit the return statement, the test will complete before our axios get
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});


// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});




const A = () => console.log('A');
const B = () => console.log('B');
const xyz = () => console.log('xyz');

// Run any functionality before/after each test
// beforeEach(() => A());
// afterEach(() => B());

// Run any functionality before/after executing all tests
// beforeAll(() => A());
// afterAll(() => B());

// Run any functionality before/after a certain group of tests
describe('Run any functionality before/after a certain group of tests', () => {
    beforeEach(() => xyz());

    test('Value of num is 1', () => {
        const num = 1;
        expect(num).toBe(1);
    })

    test('Value of num is 2', () => {
        const num = 2;
        expect(num).toBe(2);
    })
})