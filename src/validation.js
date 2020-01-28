import * as patterns from './patterns';

/**
 * Check whether given value was character or not
 * @param {*} value given value wanted to cheek it
 * @returns {boolean} true if was character, otherwise false
 */
const isCharacter = (value) => patterns.character.test(value.toString().toLowerCase());

/**
 * Check whether given value was valid email or not
 * @param {*} value given value wanted to cheek it
 * @returns {boolean} true if was valid email, otherwise false
 */
const isValidEmail = (value) => patterns.email.test(value.toString().toLowerCase());

/**
 * Check whether given both values was equal or not
 * @param  {*}  firstValue  first value wanted to check
 * @param  {*}  secondValue second value wanted to check
 * @returns {boolean} true if was equal, otherwise false
 */
const isEqual = (firstValue, secondValue) => firstValue.toString().trim().toLowerCase() === secondValue.toString().trim().toLowerCase();

/**
 * Check whether given value has been exced given length
 * @param  {*} value  value want to check
 * @param  {number} length maximum length value
 * @returns {boolean} true if was exceed, otherwise false
 */
const exceedMaxLength = (value, length) =>  value.toString().trim().length > length;

/**
 * Check whether given value has been match minmum length
 * @param  {*} value  value want to check
 * @param  {number} length minmum length value
 * @returns {boolean} true if was match, otherwise false
 */
const matchMinLength = (value, length) =>  value.toString().trim().length >= length;

/**
 * Check whether given value was number or not
 * @param  {*} value  value want to check
 * @returns {boolean} true if was number, otherwise false
 */
const isNumber = (value) => patterns.number.test(value.toString().trim().toLowerCase());

/**
 * Check whether given value was required or not
 * @param  {*} value  value want to check
 * @returns {boolean} true if was required, otherwise false
 */
const isRequired = (value) => value.toString().trim().length === 0;

/**
 * Check whether given value was saudi mobile
 * @param  {*} value  value want to check
 * @returns {boolean} true if was required, otherwise false
 */
const isSaudiMobile = (value) => patterns.saudiMobile.test(value.toString().toLowerCase());

/**
 * Convert given english numbers to arabic numbers
 * @param  {[]} values  array of values for english numbers
 * @return {[]} converted arabic numbers
 */

const toEnglishNumber = (value) =>  {
    return [...value]
    .map(num => {
        let found = patterns.arNumbers.find(arNum => arNum === num);
        found ? num = patterns.arNumbers.indexOf(num).toString() : num = num;
        return num;
    }).join().toString().split(',').join('');
}

/**
 * Validation Utility class
 * @constructor
 */
function Validation() {}
Validation.prototype.isCharacter = isCharacter;
Validation.prototype.isValidEmail = isValidEmail;
Validation.prototype.isEqual = isEqual;
Validation.prototype.exceedMaxLength = exceedMaxLength;
Validation.prototype.matchMinLength = matchMinLength;
Validation.prototype.isNumber = isNumber;
Validation.prototype.isRequired = isRequired;
Validation.prototype.isSaudiMobile = isSaudiMobile;
Validation.prototype.toEnglishNumber = toEnglishNumber;

export default Validation = new Validation();