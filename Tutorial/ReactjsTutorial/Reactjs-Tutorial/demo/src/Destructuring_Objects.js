// Destructuring Objects
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
/*
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    console.log(message);
}
*/

// new way
function myVehicle({ brand, ...rest }) {
  console.log();
    // console.log("Brand = " + brand + "\n" + "Model = " + model + "\n" + "Type = " + type + "\n" + "Year = " + year + "\n" + "Color = " + color);
}