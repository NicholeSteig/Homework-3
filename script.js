var charNum = prompt("How many characters in password (between 8 and 128)?");
var specChar = confirm("Use special characters?");
var numChar = confirm("Use numbers?");
var lowChar = confirm("Use lowercase letters?");
var upChar = confirm("Use uppercase characters?");

var numArray = [];

if (charNum)

    //all false

    if (specChar === false && numChar === false && lowChar === false && upChar === false) {

        alert("Invalid choices");
    }


//just special



if (specChar === true && numChar === false && lowChar === false && upChar === false) {

    for (var i = 0; i < charNum; i++) {

        var num = Math.floor(Math.random() * 32) + 1;


        console.log(num);
        
        numArray.push(num);

        console.log(numArray);


    }

}
