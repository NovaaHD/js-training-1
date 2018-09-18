'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
    return str.replace(/\w\S*/g, function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str str str'), 'Str Str Str')
assert.strictEqual(jadenCase('qsd qsd qsd'), 'Qsd Qsd Qsd')
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('zapzap zap'), 'Zapzap Zap')
// End of tests */
