/**
 * --- Spread Operator
 * The JavaScript spread operator (...) allows us to quickly copy all or part of an existing
 * array or object into another array or object.
 */

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const test = numbersOne.concat(numbersTwo);
console.log(test);

const fullName = "Abimanyu";
console.log([...fullName]);

const myVehicle = {
   brand: 'Ford',
   model: 'Mustang',
   color: 'red'
}
 
const updateMyVehicle = {
  type: 'car',
  year: 2021, 
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle)