'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */
function cutFirst(str){
    if(str.length<=2)return undefined;
    return str.substr(0,str.length-2)
}
function cutLast(str){
    if(str.length<=2)return undefined;
    return str.substr(2)
}
function cutFirstLast(str){
    if(str.length<=4)return undefined;
    var temp = str.substr(0,str.length-2)
    return temp.substr(2)
}

const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function', 'Should be a function')
assert.strictEqual(typeof cutLast, 'function', 'Should be a function')
assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function')
assert.strictEqual(cutFirst.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutFirstLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutFirst('bhavya'),'bhav')
assert.strictEqual(cutFirst('b'),undefined)
assert.strictEqual(cutLast('bhavya'),'avya')
assert.strictEqual(cutLast('b'),undefined)
assert.strictEqual(cutFirstLast('bhavya'),'av')
assert.strictEqual(cutFirstLast('bha'),undefined)


