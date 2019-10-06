var charNum = prompt("How many characters in password (between 8 and 128)?");
var specChar = confirm("Use special characters?");
var numChar = confirm("Use numbers?");
var lowChar = confirm("Use lowercase letters?");
var upChar = confirm("Use uppercase characters?");

var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numArray = [];
var passArray = [];



    //all false

    if (specChar === false && numChar === false && lowChar === false && upChar === false) {

        alert("Invalid choices");
    }


//just special



if (specChar === true && numChar === false && lowChar === false && upChar === false) {

    for (var i = 0; i < charNum; i++) {
        

       var charArray = specialArray;
       
        var num = Math.floor(Math.random() * charArray.length ) + 1;

        

        console.log(num);

        
        numArray.push(num);

        console.log(numArray);

        


            passArray.push(charArray[num]);
        

        }

        


    }
    

console.log(passArray);

alert("Your password is: " + passArray)

