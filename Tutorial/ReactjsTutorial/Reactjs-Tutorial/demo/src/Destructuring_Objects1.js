// Destructuring Objects in objects
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
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
function myVehicle({ brand, model, type, year, color,registration:{city,state,country} }) {
    console.log("Brand = " + brand + "\n" + "Model = " + model + "\n" + "Type = " + type + "\n" + "Year = " + year + "\n" + "Color = " + color);
    console.log("Registration Details\n" + "city = " + city + "\n" + "state = " + state + "\n" + "country = " + country);
}