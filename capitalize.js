'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */
function capitalize(text){
    if (typeof text !== 'string' || text.length == 0) return ''


  return text.charAt(0).toUpperCase() + text.slice(1)
}

// You must write your own tests
const assert = require('assert')
assert.strictEqual(capitalize(5), '')
assert.strictEqual(capitalize(''), '')
assert.strictEqual(capitalize('bhavya'), 'Bhavya')
assert.strictEqual(capitalize('cyberLeet'), 'CyberLeet')
assert.strictEqual(capitalize('InTerNsHip'), 'InTerNsHip')


