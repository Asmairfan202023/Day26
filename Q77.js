"use strict";
// Default Parameters: Write a function that greets a user It should take the user name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function helloUser(nam1 = "Anynomous") {
    console.log(`Hello,${nam1}`);
}
helloUser();
helloUser("Asma");
