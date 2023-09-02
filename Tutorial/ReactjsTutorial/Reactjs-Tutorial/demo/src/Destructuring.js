/*
React ES6 Destructuring
------------------------
old way of assigning array items to a variable:

const vehicles = ['mustang', 'f-150', 'expedition']
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

Here is the new way of assigning array items to a variable:
with Destructuring
-------------------
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;

Destructuring comes in handy when a function returns an array:
*/

function calculate(a,b) {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;

    return [add,sub,mul,div];
}

const [add,sub,mul,div] = calculate(4, 16);
console.log("add = " + add);
console.log("sub = " + sub);
console.log("mul = " + mul);
console.log("div = " + div);