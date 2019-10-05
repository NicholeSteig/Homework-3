var charNum = prompt("How many characters in password (between 8 and 128)?");
var specChar = confirm("Use special characters?");
var numChar = confirm("Use numbers?");
var lowChar = confirm("Use lowercase letters?");
var upChar = confirm("Use uppercase characters?");

//all false

if (specChar === false && numChar === false && lowChar === false && upChar === false) {

    alert("Invalid choices");
}


//just special

if (specChar === true && numChar === false && lowChar === false && upChar === false)

    //just numbers

    if (specChar === false && numChar === true && lowChar === false && upChar === false)

        //just lower

        if (specChar === false && numChar === false && lowChar === true && upChar === false)

            //just upper

            if (specChar === false && numChar === false && lowChar === false && upChar === true)

                //special and numbers

                if (specChar === true && numChar === true && lowChar === false && upChar === false)

                    //special and lower

                    if (specChar === true && numChar === false && lowChar === true && upChar === false)

                        //special and upper

                        if (specChar === true && numChar === false && lowChar === false && upChar === true)

                            //numbers and lower

                            if (specChar === false && numChar === true && lowChar === true && upChar === false)

                                //numbers and upper

                                if (specChar === false && numChar === true && lowChar === false && upChar === true)

                                    //lower and upper

                                    if (specChar === false && numChar === false && lowChar === true && upChar === true)

                                        //special, numbers, and lower

                                        if (specChar === true && numChar === true && lowChar === true && upChar === false)

                                            //special, numbers, and upper

                                            if (specChar === true && numChar === true && lowChar === false && upChar === true)

                                                //special, lower, and upper

                                                if (specChar === true && numChar === false && lowChar === true && upChar === true)

                                                    //numbers, lower, and upper

                                                    if (specChar === false && numChar === true && lowChar === true && upChar === true)

                                                        //all characters

                                                        if (specChar === true && numChar === true && lowChar === true && upChar === true)