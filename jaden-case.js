'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */
function jadenCase(str) {
    if(str.length==0)return undefined
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
    
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
// You must write your own tests
const assert = require('assert')
assert.strictEqual(jadenCase(''), undefined)
assert.strictEqual(jadenCase('front end web development internship'), 'Front End Web Development Internship')
assert.strictEqual(jadenCase('cyber Leet'), 'Cyber Leet')
assert.strictEqual(jadenCase('internship web dev'), 'Internship Web Dev')

