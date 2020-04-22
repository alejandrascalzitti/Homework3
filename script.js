var characterAmountRange = document.getElementById("characterAmountRange");
var characterAmountNumber = document.getElementById("characterAmountNumber");

var form = document.getElementById("passwordGeneratorForm");

var includeUppercase = document.getElementById("includeUppercase");
var includeLowercase = document.getElementById("includeLowercase");
var includeNumbers = document.getElementById("includeNumbers");
var includeSymbols = document.getElementById("includeSymbols");
var passwordDisplay= document.getElementById("passwordDisplay");

//character codes table and cheat sheet 
var UpperCase_Char_Codes = arrayFromLowToHigh(65, 90)
var LowerCase_Char_Codes = arrayFromLowToHigh(97, 122)
var Number_Char_Codes = arrayFromLowToHigh(48, 57)
var Symbol_Char_Codes = arrayFromLowToHigh(33.47).concat
  (arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126))



//sync both slider and number input 
characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

//passwordGeneratorForm --preventing default 
form.addEventListener("submit", e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase =document.querySelector("#includeUppercase").checked
  // var includeLowercase = document.querySelector("#includeLowercase").checked
  var includeNumbers = document.querySelector("#includeNumbers").checked
  var includeSymbols = document.querySelector("#includeSymbols").checked
  generatePassword(characterAmount, includeUppercase,  includeNumbers, includeSymbols)
  //** 


})
//Overall list of all charCodes --loop through to randomly choose one 
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  //Default to LoweCase_Char_Codes
  var charCodes = LowerCase_Char_Codes
  if (includeUppercase) charCodes = charCodes.concat(UpperCase_Char_Codes)
  if (includeSymbols) charCodes = charCodes.concat(Symbol_Char_Codes)
  if (includeNumbers) charCodes = charCodes.concat(Number_Char_Codes)
  
  

  var passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    
    //random value from list of charCodes
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]

      passwordCharacters.push(String.fromCharCode(characterCode))

  }
  console.log(passwordCharacters);
  
  //return passwordCharacters.join("")
  passwordDisplay.innerHTML=passwordCharacters.join("")



}

//CONSOLE LOG CHECK 
console.log(Number_Char_Codes)

//** */
function arrayFromLowToHigh(low, high) {
  var array = []
  for (var i = low; i <= high; i++) {
    array.push(i)

  }
  return array

}


//slider and number input function
function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}




