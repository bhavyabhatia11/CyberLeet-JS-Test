'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */
function whisper(str){
    if(str.length ==0)return undefined;
    return str.toLowerCase();
}
// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('iNtErn'),'intern')

