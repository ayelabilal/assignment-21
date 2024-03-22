// chapter (STRING METHODS)

// 1
var firstName = prompt("First name");

var lastName = prompt("Last name");

var fullName = firstName + " " + lastName;
alert("Hello " + fullName + " Welcome!");

// 2
var favouriteModel = prompt("Enter Your favourite mobile phone model");
var inputLength = favouriteModel.length;

document.write("My favourite phone is:" + inputLength);

//  3
var letter = "Pakistani";
var index = letter.indexOf("n");
document.write(
  "<br>",
  "The index of letter 'n' in the word 'Pakistan' is:" + index
);

//  4
var word = "Hello world";
var lastIndex = word.lastIndexOf("l");
document.write("<br>", "Hello world last index of 'l: '" + lastIndex);

// 5
var word = "Pakistani";
var character = word.charAt(3);
document.write("<br>", "Pakistani character at index 3: " + character);

// 6
var firstName = "ayela";
var lastName = firstName.concat("bilal");
document.write("<br>" + lastName);

// 7
var word = "hyderbad";

var replacedWord = word.replace("hyder", "islam");

document.write(
  "<br>",
  "After replacing 'Hyder','Islam', the word is:" + replacedWord
);

// 8
var message =
  "Ali and Sami are best friends. They play cricket and football together.";

var replaceMessage = message.split("and").join("&");
document.write(
  "<br>",
  "After replacing all occurrences of 'and' with '&', the message is: " +
    replaceMessage
);

// 10
var userInput = prompt("enter any thing");
var user = userInput.toUpperCase();
alert(user);

//  12
var num = 35.36;
var number = num.toString();
var numberWithoutDot = number.replace("", "");

document.write("<br>", numberWithoutDot);

// 13
// var userName = prompt("enter yout name");

// var splitter = userName.split("");
// console.log("Splitter: ", splitter);
// var isSpecialCharFound = false;
// var isAlphabetFound = false;

// for (let i = 0; i < splitter.length; i++) {
//   var code = splitter[i].charCodeAt(0);

//   if (code >= 33 && code <= 47) {
//     console.log("Special Character Found");
//     isSpecialCharFound = true;
//   } else {
//     console.log("Special Character not found");
//   }

//   if (isSpecialCharFound) {
//     alert("Remove Special Character");
//     break;
//   } else {
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//       console.log("Alphabet exists");
//     } else {
//       isAlphabetFound = false;
//     }
//   }

//   if (!isAlphabetFound) {
//     alert("Use any alphabet");
//   }

//   if (code === 65 || code === 66) {
//     console.log("Found A");
//   } else {
//     console.log("Not Found");
//   }

// 13
// var userInput = prompt("enter your name")
// var splitter = userInput.split

// 14
var userInput = prompt(
  "welcome to ABC Bakery.What do you want to order sir/ma'am?"
);

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

for (var i = 0; i < arr.length; i++) {
  if (arr[i].toLowerCase() === userInput) {
    alert(arr[i] + "is available at index" + i + "in our bakery");
  }
}

// 16

// 17
var userInput = prompt("enter a string");
if (userInput !== null && userInput !== "") {
  var lastCharacter = userInput[userInput.length - 1];
  alert("The last character of the input is : " + lastCharacter);
} else {
  alert("no input provided");
}


