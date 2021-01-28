function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunctionES6(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction();
newFunctionES6();

newFunctionES6('José',29,'EC');

// TEMPLATE LITERALS

let hello = 'hello';
let world = 'world';
console.log(hello+' '+world);
console.log(`${hello} ${world}`);

// MULTILINEA
console.log('Hola.\n'+' otra frase');
console.log(`Hola.
 otra frase`);

// DESESTRUCTURACIÓN
let person = {
    name: 'José',
    age: 29,
    country: 'E'
}

let {name, age} = person;

console.log(name, age);

// PROPAGACIÓN

let leters = ['a', 'b', 'c'];
let numbers = [1, 2, 3];
let all = ['a1', ...leters, ...numbers];
console.log(all);

// ASIGNACIÓN de variables

{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log('desde el bloque let', globalLet)
}

console.log(globalVar);
console.log(globalLet);

// Asignación de objetos

let name = 'José';
let age = 29
obj = {name: name, age: age};
objES6 = {name, age};

// Arrow functions

const names = [
    {name: 'jose', age : 29},
    {name : 'Juanito', age : 28}
];

let listNames = names.map(function (item) {
    console.log(item.name);
});

let listNamesES6 = names.map(item => {
    console.log(item.name);
});

const num=2;
const square = num => num*num;

// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    })
}

helloPromise().then(respone => console.log(respone))
.catch(error => console.log(error));

// Clases

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// ES6
import hello from './module'

//CommonJS
const hello = require('./module')

console.log(hello())

// Generators
function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
