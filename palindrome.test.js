const mypalindrome = require('./palindrome');

test('mypalindrome function exists', () =>{
    expect(mypalindrome).toBeDefined();
})

test('Check if mypalindrome', () => {
    expect(mypalindrome('racecar')).toBeTruthy();
})

test('Check if mypalindrome', () => {
    expect(mypalindrome('hat')).toBeFalsy();
})