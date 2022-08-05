const addElementArr = require('./addElementArr');

test('addElement function exists', () => {
    expect(typeof addElementArr).toEqual('function');
})

test('1 should be added to the beginning of 2, 3, 4, 5', () => {
    const arr1 = [2, 3, 4, 5];
    const arr2 = [1, 2, 3, 4, 5];
    const num = 1;
    expect(addElementArr(arr1, num)).toEqual(arr2);
})