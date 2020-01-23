# Validation

Validation library using vanila JavaScript including the following: 
  - isCharacter
  - isValidEmail
  - isEqaul
  - exceedMaxLength
  - matchMinLength
  - isNumber
  - isRequired
  - toEnglishNumber
  - isSaudiMobile
  

### Installation

- Step 1: Dwonload or clone the reposetory.
- Step 2: put the validation folder inseide your project.
- Step 3: import index.js file in your file. Ex:  `import Validation from './validation';`
- Step 4: Take new instance from Validation object Ex: `validation: new Validation()` 

##### NOTE:

```sh
if you use React.js : put step 4 on your component state.
```
```sh
if you use Angular2+ : put step 4 on componentDidMount function.
```

### Methods
| Name | Description |
| ------ | ------ |
| isCharacter | Paramters:  value. Return: true if the value is character, otherwise return false. |
| isValidEmail | Paramters: value. Return: true if email is valid, otherwise return false. Email can accept domain and sub domain  |
| isEqaul |  Paramters: Two values. Return: true if value one equals value two otherwise return false |
| exceedMaxLength | Paramters: value and length as number.  Return: true if length exceed the length , otherwise return false |
| matchMinLength | Paramters: value and length as number. Return: true if length doesn't match min-length , otherwise return false |
| isNumber | Paramters: value. Return: true if the value is number, otherwise return false |
| isRequired | Paramters: value. Return: true if value length equals 0 otherwise return false |
| toEnglishNumber | Paramters: value. Return: converted Arabic numbers from Engilsh numbers.|



### Todos

 - Write More functions
