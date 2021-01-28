/* clave y valores de un objeto (Object)*/
const data = {
    frontend: 'José',
    backend: 'Isabel',
    design: 'Ana',
}

    // convierte objeto a una matriz
const entries = Object.entries(data);
console.log(entries)

    //elementos de un objeto
console.log(entries.length)

    //convierte los valores del objeto a un arreglo
const values = Object.values(data);
console.log(values);

/* padding*/
const stringVal = 'hello';
//añade al inicio
console.log(stringVal.padStart(7,'hi'));
//añade al final
console.log(stringVal.padEnd(12,' -----'));

// ASYNC AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
        ? setTimeout(()=> resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    });
}

const helloAsync = async () => {
    console.log('begin');
    const hello = await helloWorld();
    console.log(hello);
}

// try catch async await

const anotherFunction = async()=>{
    try {
        const hello = await helloWorld();
    } catch  (error) {
        console.log(error);
    }
}

anotherFunction();