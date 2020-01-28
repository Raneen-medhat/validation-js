# Welcome to Vanilla JavaScript validation package

**vanilla-js-validation** is validation library using pure JavaScript including the following methods that can help you to validate your form inputs in easy way:

- isCharacter

- isValidEmail

- isEqual

- exceedMaxLength

- matchMinLength

- isNumber

- isRequired

- toEnglishNumber

- isSaudiMobile


## Installation


- Step 1: `npm i vanila-js-validation --save`

- Step 2: `import Validation from 'vanila-js-validation';`


##### NOTE:



```sh

if you use React.js : put step 3 on your component state if you use calss component *or* before your function if you use functional component.

```

```sh

if you use Angular2+ : put step 3 on ngOnInit method.

```



## Methods

|   method             |Paramters            |Return                         |
|----------------|-------------------------------|-----------------------------|
|isCharcter|`value`            |true if the value is character, otherwise return false            |
|isValidEmail| `value` | true if email is valid, otherwise return false. *Email can accept domain and sub domain*
|isEqual          |`value1 , value2`|true if value one equals value two otherwise return false|
|exceedMaxLength       |`value , expected length`            |true if length exceed the length , otherwise return false          |
|matchMinLength          |`value , expected length`| true if length doesn't match min-length , otherwise return false|
|isNumber          |`value`        |true if the value is number, otherwise return false          |
|isRequired          |`value`|true if value length equals 0 otherwise return false
toEnglishNumber|`value`|converted Arabic numbers from Engilsh numbers

## To do

- Write More functions!
