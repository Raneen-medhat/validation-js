import * as patterns from './patterns';
export default function Validation() {

}

Validation.prototype = {
    // RETURN TRUE IF THE VALUE IS character, OTHERWISE RETURN FALSE;
    isCharacter: (value) => {
        return patterns.character.test(value.toString().toLowerCase());
    },

    // RETURN TRUE IF EMAIL IS VALID OTHERWISE RETURN FALSE
    isValidEmail: (value) => {
        return patterns.email.test(value.toString().toLowerCase());
    },

    // RETURN TRUE IF VALUE ONE EQUALS VALUE TWO OTHERWISE RETURN FALSE
    isEqaul: (val1, val2) => {
        return val1.toString().trim().toLowerCase() === val2.toString().trim().toLowerCase();
    },

    // RETURN TRUE IF LENGTH EXCEED THE LENGTH , OTHERWISE RETURN FALSE
    exceedMaxLength: (value, length) => {
        return value.toString().trim().length > length;
    },

    // RETURN TRUE IF LENGTH DOSN'T MATCH MINLENGTH , OTHERWISE RETURN FALSE
    matchMinLength: (value, length) => {
        return value.toString().trim().length >= length;
    },

    // RETURN TRUE IF THE VALUE IS NUMBER, OTHERWISE RETURN FALSE
    isNumber: (value) => {
        return patterns.number.test(value.toString().trim().toLowerCase());
    },

    // RETURN TRUE IF VALUE LENGTH EQUALS 0 OTHERWISE RETURN FALSE
    isRequired :  (value) => {
        return value.toString().trim().length === 0;
    },

    // RETURN THE CONVERTED NUMBERS
    toEnglishNumber: (value) => {
        const numbers = [...value];
        return numbers.map(num => {
            let found = patterns.arNumbers.find(arNum => arNum === num);
            found ? num = patterns.arNumbers.indexOf(num).toString() : num = num;
            return num
        }).join().toString().replace(',', '');
    },

    // RETURN TRUE IF VALUE IS SAUDI Mobile, OTHERWISE RETURN FALSE
    isSaudiMobile:  (value) => {
        return patterns.mobile.test(value.toString().toLowerCase());
    },

   typeOnlyNumbers: (elementId) => {
        let element = document.getElementById(elementId);
        element.addEventListener('input', (event) => {
            if(!patterns.number.test(event.target.value)) {
              event.target.value = event.target.value.replace(/[^\d]/gi, '');
            }
          });
    }
};



