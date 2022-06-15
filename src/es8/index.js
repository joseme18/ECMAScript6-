// object entries para convertir un objeto en una matriz

const data = {
    frontend:"Jose",
    backend:"Isabel",
    design:"Ana"

};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//// object value solo toma los valores asignados en el objeto y hace un nuevo array con ellos


const values = Object.values(data);
console.log(values); // arroja el array [Jose,Isabel,Ana]
console.log(values.length); //3 elementos 

//padding para gregar una cadena vacia o elemento a un string 

const string = "hello";
console.log(string.padStart(7, "hi")); // a esta funcion se le asignan dos elementos el  primero es 7 porque ya el string posee 5 y le queremos agregar 2 elementos, el  segundo parametro viene siendo los dos elementos que queremos agregar "hi"
console.log(string.padEnd(7,"hi"));


//comas, se puede agregar comas en el ultimo elemento de los objetos asi la sintaxis se vuelve mucho mas amigable

const data2 = {
    frontend:"Jose",
    backend:"Isabel",
    design:"Ana",

};

// async y await 

const helloWorld = () => { //creamos una funcion con  arrow function 
return new Promise((resolve, reject)=>{ //creamos una nueva promesa 
    (true) //condicional ternario
    ? setTimeout(() => resolve("HelloWorld"),3000) //se utiliza la funcion setTimeout que recibe dos parametros uno es una funcion y el otro es el tiempo, la utilizamos para que dura un tiempo especifico 
    : reject (new Error("Test Error")); //terminamos el if ternario con el reject 
    })
};

const hellowAsync = async () => {// asi es como se reconoce cuando una funcion utilizara el async 
const hello = await helloWorld(); // await es una palabra reservada dentro de ECMAScript 8 para esta funcion 
console.log (hello);
};

hellowAsync();


//otra manera de usar async y await 

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error){
        console.log(error);
    }
}

anotherFunction();