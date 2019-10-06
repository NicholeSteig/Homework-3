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

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }




}


//just numbers
if (specChar === false && numChar === true && lowChar === false && upChar === false) {

    for (var i = 0; i < charNum; i++) {


        var charArray = numberArray;

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }
}
//just lower
if (specChar === false && numChar === false && lowChar === true && upChar === false)

    for (var i = 0; i < charNum; i++) {


        var charArray = lowerArray;

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }

//just upper
if (specChar === false && numChar === false && lowChar === false && upChar === true) {

    for (var i = 0; i < charNum; i++) {


        var charArray = upperArray;

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }
}
//special and numbers
if (specChar === true && numChar === true && lowChar === false && upChar === false)

    for (var i = 0; i < charNum; i++) {


        var charArray = specialArray.concat(numberArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }

//special and lower
if (specChar === true && numChar === false && lowChar === true && upChar === false) {
    for (var i = 0; i < charNum; i++) {


        var charArray = specialArray.concat(lowerArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }
}
//special and upper
if (specChar === true && numChar === false && lowChar === false && upChar === true)

    for (var i = 0; i < charNum; i++) {


        var charArray = specialArray.concat(upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }
//numbers and lower
if (specChar === false && numChar === true && lowChar === true && upChar === false)

    for (var i = 0; i < charNum; i++) {


        var charArray = numberArray.concat(lowerArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);


    }
//numbers and upper
if (specChar === false && numChar === true && lowChar === false && upChar === true) {

    for (var i = 0; i < charNum; i++) {


        var charArray = numberArray.concat(upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);

    }
}
//lower and upper
if (specChar === false && numChar === false && lowChar === true && upChar === true) {

    for (var i = 0; i < charNum; i++) {


        var charArray = lowerArray.concat(upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);
    }
}
//special, numbers, and lower
if (specChar === true && numChar === true && lowChar === true && upChar === false) {

    for (var i = 0; i < charNum; i++) {


        var charArray = numberArray.concat(lowerArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);

    }
}


//special, numbers, and upper
if (specChar === true && numChar === true && lowChar === false && upChar === true) {

    for (var i = 0; i < charNum; i++) {


        var charArray = specialArray.concat(numberArray, upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);
    }
}
//special, lower, and upper
if (specChar === true && numChar === false && lowChar === true && upChar === true) {

    for (var i = 0; i < charNum; i++) {


        var charArray = specialArray.concat(lowerArray, upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);
    }
}
//numbers, lower, and upper
if (specChar === false && numChar === true && lowChar === true && upChar === true) {

    for (var i = 0; i < charNum; i++) {


        var charArray = numberArray.concat(lowerArray, upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);
    }
}
//all characters
if (specChar === true && numChar === true && lowChar === true && upChar === true) {
    for (var i = 0; i < charNum; i++) {


        var charArray = specialArray.concat(numberArray, lowerArray, upperArray);

        var num = Math.floor(Math.random() * charArray.length) + 1;



        console.log(num);


        numArray.push(num);

        console.log(numArray);




        passArray.push(charArray[num]);
    }
}


console.log(passArray);

console.log(passArray.join(""));

var finalPassword = passArray.toString();

alert("Your password is: " + passArray.join(""));

document.write("Your password is: " + passArray.join(""));

