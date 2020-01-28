import * as patterns from './patterns';

/**
 * Check wherther given value was character or not
 * @param {*} value given value wanted to cheek it
 * @returns {boolean} true if was character, otherwise false
 */
function isCharacter (value) {
    return patterns.character.test(value.toString().toLowerCase());
}

/**
 * Check wherther given value was valid email or not
 * @param {*} value given value wanted to cheek it
 * @returns {boolean} true if was valid email, otherwise false
 */
function isValidEmail (value) {
    return patterns.email.test(value.toString().toLowerCase());
}

/**
 * Check whether given both values was equal or not
 * @param  {*}  firstValue  first value wanted to check
 * @param  {*}  secondValue second value wanted to check
 * @returns {boolean} true if was equal, otherwise false
 */
function isEqual (firstValue, secondValue) {
  return firstValue.toString().trim().toLowerCase() === secondValue.toString().trim().toLowerCase();
}

/**
 * Check whether given value has been exced given length
 * @param  {*} value  value want to check
 * @param  {number} length maximum length value
 * @returns {boolean} true if was exceed, otherwise false
 */
function exceedMaxLength (value, length) {
    return value.toString().trim().length > length;
}

/**
 * Check whether given value has been match minmum length
 * @param  {*} value  value want to check
 * @param  {number} length minmum length value
 * @returns {boolean} true if was match, otherwise false
 */
function matchMinLength (value, length) => {
    return value.toString().trim().length >= length;
}

/**
 * Check whether given value was number or not
 * @param  {*} value  value want to check
 * @returns {boolean} true if was number, otherwise false
 */
function isNumber (value) {
    return patterns.number.test(value.toString().trim().toLowerCase());
}

/**
 * Check whether given value was required or not
 * @param  {*} value  value want to check
 * @returns {boolean} true if was required, otherwise false
 */
function isRequired (value) {
    return value.toString().trim().length === 0;
}

/**
 * Check whether given value was soudi mobile
 * @param  {*} value  value want to check
 * @returns {boolean} true if was required, otherwise false
 */
function isSaudiMobile (value) {
  return patterns.soudiMobile.test(value.toString().toLowerCase());
}

/**
 * Convert given english numbers to arabic numbers
 * @param  {[]} values  array of values for english numbers
 * @return {[]} converted arabic numbers
 */
function toEnglishNumber (...values) => {
    return values
      .map(num => {
          let found = patterns.arNumbers.find(arNum => arNum === num);
          found ? num = patterns.arNumbers.indexOf(num).toString() : num = num;
          return num
      })
      .join().toString().replace(',', '');
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
