'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */
function keepFirst(str){
    if(str.length<=2)return undefined;
    return str.substr(0,2)
}
function keepLast(str){
    if(str.length<=2)return undefined;
    return str.substr(-2)
}
function keepFirstLast(str){
    if(str.length<=4)return undefined;
    var temp = str.substr(-2)
    var temp2 = str.substr(0,2)
    return temp2+temp
}


// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function', 'Should be a function')
assert.strictEqual(typeof keepLast, 'function', 'Should be a function')
assert.strictEqual(typeof keepFirstLast, 'function', 'Should be a function')
assert.strictEqual(keepFirst.length, 1, 'Should takes 1 arguments')
assert.strictEqual(keepLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(keepFirstLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(keepFirst('bhavya'),'bh')
assert.strictEqual(keepFirst('b'),undefined)
assert.strictEqual(keepLast('bhavya'),'ya')
assert.strictEqual(keepLast('b'),undefined)
assert.strictEqual(keepFirstLast('bhavya'),'bhya')
assert.strictEqual(keepFirstLast('bha'),undefined)

