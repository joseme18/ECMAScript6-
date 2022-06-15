// replace all

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "python"); // con replace solo encontraba el primer elemento y lo reemplazaba 

console.log(replacedString); //muestra: python es maravilloso, con JavaScript puedo crear el futuro de la web

const replacedString2 = string.replaceAll("JavaScript", "python"); //muestra 

console.log(replacedString2); // muestra: python es maravilloso, con python puedo crear el futuro de la web



//metodos privados 

class Message {
    #show(val){ // al poner # antes del metodo hacemos que este metodo sea privado y solo pueda ser utilizado dentro de la clase
        console.log(val)
    }
}

const message = new Message();
message.show("Hola"); // nos da un erros porque el metodo show es un metodo privado de la clase Message


// getter setter 

class Message {
    #show(val){ 
        console.log(val)
    };
    get /*#add*/(val){ // utilizamos el get para acceder al metodo privado 
      //...
    }
}


// promise any

const promise1 = new Promise ((resolve, reject) => reject("1"));
const promise2 = new Promise ((resolve, reject) => resolve("2"));
const promise3 = new Promise ((resolve, reject) => rresolve("2"));

Promise.any([promise1, promise2, promise3])
.then (response => {
    return console.log(response); // retorna el primer valor que se resuelve 
});

// weak ref

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    //codigo
};


//expreciones y operadores 

//se han agregado tres expresiones que son 

let isTrue = true;
let isFlase = false;

// "&&=" 
console.log(isTrue &&= isFlase);

// "||="
console.log(isTrue ||= isFlase);

// "??="
console.log(isTrue ??= isFlase);