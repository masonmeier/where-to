const people = [
  {
    name: 'Jerome',
    age: 709
  },
  {
    name: 'Kevon',
    age: 21
  },
  {
    name: 'Karnash the Destroyer',
    age: 69
  }
];
// const sexiestAge = 50;
// const persAge = people.age;
const minAge = 50;
const maxAge = 1000;

function isWithinAgeRange(person, minAge, maxAge) {
  return person.age >= minAge && person.age <= maxAge;
}

function hasLongAssName(person) {
  return person.name.length >= 10;
}


const ageResult = people.filter(function (person) {
  return isWithinAgeRange(person, minAge, maxAge) && hasLongAssName(person);
});
console.log(ageResult);


//multiple functions that evaluate the values of each individual field
//comparison operators where the comparison value is provided by the user input
//a result function that tethers all of the comparison operators together