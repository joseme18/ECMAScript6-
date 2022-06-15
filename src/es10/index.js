//flat() genera un nuevo array con el nivel especificado dentro de los parametros de la funcion 


let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2)) // 2 es el valor de la profundida que se quiere aplanar 

// flat map

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2])); //crea un nuevo array con las condidiones de la funcion 



//trimStart y trimEnd permite eliminar los espacios en blanco de un string

let hello = "      hello world";
console.log(hello);
console.log(hello.trimStart());

let hello2  = "hello world            ";
console.log(hello2);
console.log(hello2.trimEnd());



//Optional catch binding 

try {

}catch (error){ //antes 
    error
}

try {

}catch {  //ahora 
    error
}

// fromEntries: para tranformar arreglo en un objeto 

let entries = [["name", "Jose"], ["age",29]];

console.log(Object.fromEntries(entries))


//objeto de tipo simbolo : nos va a permitir acceder a una descripcion de un objeto de tipo simbolo

let m = `my symbol`;

let symbol = Symbol(m);

console.log(symbol.description);

