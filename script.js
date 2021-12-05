let person = {
    name: 'Michel',
    age: '51'
};
console.log(person);
person.name = 'Michel';
console.log(person.name);
person.age = 51;
console.log(person.age);
person['name'] = 'Donk';
console.log(person.name);

let selectedColors = ['green', 'blue', 'red', 'yellow', 1];
selectedColors[5] = 'Greeting: I am an object';
console.log(selectedColors);
console.log(selectedColors[2])
console.log(selectedColors.length);
console.log(selectedColors[5]);




