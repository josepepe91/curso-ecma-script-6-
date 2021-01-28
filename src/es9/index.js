// destructuración parcial
const obj = {
    name: 'josé',
    age: 29,
    country: 'EC'
}

let {country, ...otros} = obj;
console.log(otros); // { name: 'josé', age: 29 }

const obj = {
    name: 'josé',
    age: 29
}

const obj1 = {
    ...obj,
    country: 'EC'
}

console.log(obj1); // { name: 'josé', age: 29, country: 'EC' }

// promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    });
}

helloWorld()
.then(console.log)
.catch(console.log)
.finally(()=>console.log('Finalizado'))


// Regex Match
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const match0 = match[0];
const year = match[1];
const month = match[1];
const day = match[1];

console.log(match, match0, year, month, day);

/*
[ '2018-04-20',
  '2018',
  '04',
  '20',
  index: 0,
  input: '2018-04-20',
  groups: undefined ] '2018-04-20' '2018' '2018' '2018'
  */