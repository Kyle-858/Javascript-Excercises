/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
    let str = int.toString()
    let arr = str.split('')
    let reverse = arr.reduce((accumulator, current) => current + accumulator)
    let outc = parseInt(reverse)
    return outc;
};

module.exports = reverseInteger;
