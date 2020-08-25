var pets = [
    { name: `Max`, type: `dog`, bornOn: 2018 },
    { name: `Angel`, type: `cat`, bornOn: 2015 },
    { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

const getAge=pet => {return new Date().getFullYear() - pet.bornOn};

var petsWithAge=[];
pets.map(pet=>pet.age=getAge(pet))
pets.forEach(pet=>petsWithAge.push(pet))
console.log(petsWithAge);

var dogs=[];

dogs=pets.filter((pet)=> pet.type==`dog`)
console.log(dogs)
var jasper;

jasper= pets.find((pet) => pet.name==`Jasper`)
console.log(jasper);

console.log(`Jasper is ${jasper.age} years old`);