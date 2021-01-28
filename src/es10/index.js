
let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2));
//[1,2,3,1,2,3,1,2,3]

console.log(array.flat());
//[1,2,3,1,2,3,[1,2,3]]


let array = [1,2,3,4,5]

console.log(array.flatMap(value, value * 2))
//[1,2,2,4,3,
//6,4,8,5,10]

let hello = '                        hello      '
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//                        hello      
//hello      
//                        hello

// try catch (error disponible sin referenciar)
try {
//...
} catch {
    console.log(error)
}

// estructuración
let entries = [['name', 'oscar'], ['age',32]]
console.log(Object.fromEntries(entries)); //{name: 'oscar',age:32}

//symbol
let smbl = 'My Symbol';
let symbol = Symbol(smbl);
console.log(symbol.description)