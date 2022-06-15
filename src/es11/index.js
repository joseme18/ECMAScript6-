//dynamic import
//creamos archivo HTML con el que vamos a interactuar 

let button = document.getElementById("btn");

// creamos un nuevo arcchivo file.js que tenga la logica o el codigo que vamos a utilizar aqui 

button = addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});


// bigInt : elemento que nos va a permitir trabajar con numeros enteros mayores a 2 ** 53 (este es el numero mas grande que se puede usar en javaScript)

const bigNumber = 9007199254740991n; //se le agrega n al final del numero indicando que estamos trabajando con bigInt
const anotherBigNumber = BigInt(9007199254740991); // esta es la otra forma de indicar que estamos trabajando con bigInt

console.log(bigNumber);
console.log(anotherBigNumber);

//promise all y promise all settled

const promise1 = new Promise ((resolve,reject) => reject("reject"));
const promise2 = new Promise ((resolve,reject) => resolve("resolve"));
const promise3 = new Promise ((resolve,reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3]) // se pasa en un arreglo las promesas que seran utilizadas 
//promise all va a ser rechazada en el momento en el que se rechcae alguna de las promesas para regresarnos la informacion y en promise all settle no importa el estado de las promesas, solo esperara hasta que todas sean resueltas 
.then (response => console.log(response));


//global this 

console.log(window);
console.log(globalThis); //global this estaba solo disponible dentro de la consola pero ahora tambien esta disponible para usar en otras apps


//null 

const fooo = null ?? 'default string';
console.log(fooo);


//optional chaining 

const user = {}; // a veces tenemos un objeto vacio que sera llenado previamente por un usuario, si tratamos de usar alguno de sus elementos nos dara un error porque estos elementos aun no existen 

console.log(user.profile.email); //email se muestra undefined porque no existe y arroja un error que rompe la aplicacion  

console.log(user?.profile?.email); // colocamos los ? para evitar el error y de esta manera se lea el objeto y no se rompa la aplicacion, solo se mostrata undefined

