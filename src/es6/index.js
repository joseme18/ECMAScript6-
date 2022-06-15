// Como se debia escribir antes de es6

function newFunction(name, age, country){
    var name = name || "Jose";
    var age = age || 29;
    var country = country || "VEN"
    console.log(name, age, country);
}

// con es 6 

function newFunction2(name = "Jose", age = 29, country = "VEN"){
console.log(name, age, country);
}

newFunction2(); // al correr la funcion sin argumentos, trae los valores asignados anteriormente por defecto
newFunction2("Samuel", 22, "VEN"); // pero si ejecutas la funcion con otros argumentos los asignados anteriormente seran reemplazados



//Otra asignacion: Templates literals 
// Como se debia escribir antes de es6
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;

console.log(epicPhrase);

// con es 6 

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


//Otra asignacion: Multilinea en Strings
// Como se debia escribir antes de es6

let lorem = "Contrary to simply random text. It has \n" //anteriormente en strings muy largos se usaba \n con una + para saltar la linea 
+ " and 1.10.33 of emes of Good and Evil) by ";

// con es 6 se puede dar un enter siempre que el texto este dentro de las comillas francesas `` 

let lorem2 = `Otra frase epica que necesitamos 
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

//Otra asignacion: Destructuracion de elementos
// Como se debia escribir antes de es6

let person = {
    'name':'oscar',
    'age': 32,
    'country':'Ven'  
};

console.log(person.name, person.age);

// con es 6 

let { name, age } = person; 
console.log(name, age);

//Otra asignacion: operador de propagacion 
// Como se debia escribir antes de es6

let team1 = ['Jose','Julian','Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', 'Jose','Julian','Ricardo','Valeria', 'Yesica', 'Camila'];

// con es 6 

let education1 = ['David', ...team1,...team2];

console.log (education);
console.log (education1);


//Otra asignacion: let
// Como se debia escribir antes de es6

var hola = "hola"; //variable que esta disponible de manera global 

// con es 6 

let hola = "hola"; //variable que esta disponible de manera local dentro del bloque de codigo que se inicializa y se declara 


//ejemplo 

{var globalVar = "Global var"}

{let globalLet = "Global let"}

console.log(globalVar); //muestra Global var
console.log(globalLet); //muestra reference error porque la variable let solo esta disponible dontro de los corechetes



//Otra asignacion: const
// Como se debia escribir antes de es6

var hola = "hola"; //variable que esta disponible de manera global y variable

// con es 6 

const a = "b";

a = "a"; // da error porque const es un tipo de variable constante que no puede cambiar su valor 

//Otra asignacion: propiedad de objetos mejorada 
// Como se debia escribir antes de es6

let name1 = "Jose";
let age1 = 32;

obj = { name1:name1, age1:age1 };
console.log(obj);

// con es 6 

obj2 = {name1, age1};

console.log(obj2);


//Otra asignacion: arrow functions (map)
// Como se debia escribir antes de es6

const names = [
    {name2 : "Jose", age: 29},
    {name2 : "Oscar", age: 32}   
];

let listOfNames = names.map(function(item){
 return item.name2
});

console.log(listOfNames);

// con es 6 

let listOfNames2 = names.map(item => item.name2)
       
   console.log(listOfNames2);


//otros ejemplos

     let listOfNames4 = name2 => {
    //codigo de la funcion 
   };

   const square = num => num * num; //la funcion square recibe un parametro que es num y retorna la multiplicacion del mismo
       


//Otra asignacion: promesas = algo va a pasar

const helloPromise = () => { //crea una nueva funcion 
    return new Promise ((resolve,reject) =>{ //se incluye Promesa que pasa a ser otra funcion con dos parametros
        if (true) {
            resolve ('Hey!'); // resolve cuando se cumple la promesa 
        }
        else{
            reject ("Ups!!"); // reject cuando no se cumple la promesa 
        }
    });
}

helloPromise()
    .then(response => console.log(response)) // en caso de ser acertada la promesa esta dispara este valor .then
    .catch(error => console.log(error)); // en caso de no ser acertada la promesa esta dispara .catch 
    // se pueden incluir varias veces .then para ejecutar varias funciones 



//Otra asignacion: Clases

class calculator { // se crea una clase con nombre calculator
constructor(){ // asigna un contructor que es el metodo para inicializar la clase 
    this.valueA = 0; // aqui asignamos variables que estaran dispobibles en un entorno global 
    this.valueB = 0;
}
sum(valueA,valueB){ // creamos una funcion (metodo) tendra dos valores 
    this.valueA = valueA; // se asignan los valores 
    this.valueB = valueB;
    return this.valueA + this.valueB; // retorna la suma de los valores 
}
}

const calc = new calculator(); //asignamos una nueva clase "calculator"  a la constando calc 
console.log(calc.sum(2,2)); // utilizamos calc con el metodo dentro de la clase para sumar // arroja 4


//Otra asignacion: import, Export (modulos)

//EN OTRO ARCHIVO de nombre module.js

const hello1 = () => { // se crea una funcion "hello" en otro archivo 
    return "hello"
};
 
export default hello1; // se utiliza export para poder exportar esa funcion donde sea necesaria

//EN ESTE ARCHIVO index.js

import {hello1} from './module'; // asi importas la funcion desde otro documento 


//Otra asignacion: Generatos

function* helloWorld () { //ponemos asterisco para asignar que es un generator
    if (true){
        yield 'Hello, '; // el valor yield permite retornar algo y guarda ese estado de forma interna 
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld(); //ejecutamos el generator 

console.log(generatorHello.next().value); // asi se generan cada uno de los elementos dentro del generator
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); // el tercer elemento muestra undefined devido a que no existe un tercer elemento dentro de nuestra funcion generator 