// Spread Operator
//  (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// and we can store multiple elements in a single variable that is spread operator

const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
const combined = [...n1, ...n2];
// console.log(combined);

// used in combination with destructuring.
// const [one, ...rest] = combined;
// console.log("One = " + one);
// console.log("Rest = " + rest);

// with objects
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
};
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
};
// console.log("myVehicle = "+myVehicle);
// console.log("updateMyVehicle = "+updateMyVehicle);

// // console.log(updateMyVehicle.type);
const result = { ...myVehicle, ...updateMyVehicle };
// console.log(result);

// myFunc(result);
function myFunc({type,year,...restData}) {
    console.log("type = "+type); // indivisual data
    console.log("year = "+year);
    console.log(restData); // rest data
// }
// const [on1, tw2, ...result1] = updateMyVehicle;
// console.log("On1 = " + on1 + "\n" + "On2 = " + on2 + "\n" + result1);