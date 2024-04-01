"use strict";
// Function Expressions vs Function Declaration: Compare function expression and declarations by creating one of each that performs the same task, such as squaring a number.
// Function declaration for squaring
function declarationsquare(number) {
    return number * number;
}
// Function expression for squaring
const expressionsquare = function (number) {
    return number * number;
};
console.log(declarationsquare(6));
console.log(expressionsquare(5));
