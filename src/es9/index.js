//operador de reposo: puede extraer las propiedades de un objeto que aun no se ha construido

const obj = {
    name:"Jose",
    age:29,
    country:"VEN"
};

let {name, ...all} = obj; //en este caso se extrae name del objeto obj
console.log(all); //solo muestra {age:29, country:"VEN"}


//propiedades de propagacion 

const obj1 = {
    name:"Jose",
    age:29,
};
const obj2 = {
    ...obj1, // se utiliza para anidar un ebjeto dentro de otro 
    country:"VEN"
};

console.log(obj2);

//promise 

const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve ("HelloWorld"), 3000)
        : reject(new Error("Teste Error"))
    });
};

helloWorld()
.then(response => console.log (response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizo"))


// rejex como podemos agrupar bloques de rejex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec("2018-04-20");

const year = match[1]
const month= match[2]
const day = match[3]

console.log(year, month, day);