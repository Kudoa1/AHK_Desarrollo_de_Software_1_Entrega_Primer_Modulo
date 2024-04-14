/*1)Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.*/

function convertirATitulo(frase){
    //separa la frase en palabras
    var palabras= frase.split(" "); //palabras=["palabra1","palabra2",...]

    //Iterar sobre cada palabra
    for (var i=0; i<palabras.length; i++){
        //Convertir la primera letra a mayúscula y el resto a minúscula
        palabras[i]= palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1).toLowerCase();  //palabras[i]="P"+"alabra1"
    }
    //Unir las palabras en una nueva frase
    var frasenNueva= palabras.join(" ");    //unen los substrings usando el parametro (lo contrario a split)

    return frasenNueva;
}
console.log("1) "+convertirATitulo("probando la funcion"));


/*2)Concatenar elementos de un array con un separador personalizado:
Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript" */

function concatenarPalabras(array,separador){
    var palabra=array.join(separador);
    return palabra;
}
console.log("2) "+concatenarPalabras(["Hola","Mundo","javascript"],"-"));


/*3)Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript” */

function revertirfrase(frase){
    var palabrasInvertidas="";
    var palabras=frase.split(" ");

    for (var i=palabras.length-1; i>=0;i--){
        palabrasInvertidas=palabrasInvertidas+palabras[i]+" ";
    }
    return palabrasInvertidas;
}
console.log("3) "+revertirfrase("JavaScript es divertido"))


/*4)Contar la cantidad de veces que aparece una palabra en una cadena:
Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2 */

function vecesPalabraRepetida(frase,palabra){
    var palabras=(frase.toLowerCase()).split(" ");
    var contPalabras=0;

    for(var i=0; i<palabras.length;i++){
        if (palabra==palabras[i]){contPalabras++;}
    }
    return contPalabras;
}
console.log("4) "+vecesPalabraRepetida("El sol brilla y el cielo está despejado.","el"));


/*5)Comprobar si una cadena de texto termina con un determinado sufijo:
Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.
Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true. */

function comprobarSufijo(cadena,sufijo){
    //comenzamos las variables en el final de cada uno
    var i= cadena.length-1;
    var j= sufijo.length-1;

    //mientras que haya carácteres en cadena y sufijo, itera para atrás en lenght de cada uno
    while (i>=0 && j>=0){
        //si los caracteres no coinciden, la cadena no termina con el sufijo
        if (cadena.charAt(i)!== sufijo.charAt(j)){return false;}
        //nos movemos a la siguiente posicion hacia atrás en la cadena y en el sufijo
    i--;
    j--;
    }
    //devuelve True si el sufijo se acaba (previo todo lo anterior)
    return j === -1;
}
console.log("5) "+comprobarSufijo("programacion","cion"));


/*6)Eliminar los espacios en blanco al inicio y final de una cadena:
Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript
es divertido" */

function eliminarEspaciosBlancosAlFinal(string){
    var inicio = 0;
    var fin = string.length - 1;

    // Eliminar espacios en blanco al inicio
    while (string[inicio] === " ") {
        inicio++;
    }
    // Eliminar espacios en blanco al final
    while (string[fin] === " ") {
        fin--;
    }
    
    // Crear una subcadena sin los espacios en blanco al inicio y al final
    var subcadena = string.slice(inicio, fin + 1);

    return subcadena;
}
console.log("6) "+eliminarEspaciosBlancosAlFinal(" hola ejemplo "));


/*7)Extraer el dominio de una dirección de correo electrónico:
Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el
dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar” */

function extraerDominio(correo){
    var dominio="";
    for (var i=0; i<correo.length;i++){
        if(correo[i]=="@"){
           return correo.slice(i);
        }
    }
}
console.log("7) "+extraerDominio("jhondoe@ahk.com.ar"));


/*8) Combinar dos arrays alternando sus elementos:
Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', 'd'], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’] */

function alternarArrays(array1, array2) {
    var array3 = [];
    var minLength = Math.min(array1.length, array2.length); // Obtener la longitud mínima de los dos arrays

    // Iterar hasta la longitud mínima
    for (var i = 0; i < minLength; i++) {
        // Agregar elementos de ambos arrays de manera alternativa
        array3.push(array1[i], array2[i]);
    }

    // Si un array tiene más elementos que el otro, agregar los elementos restantes al final del nuevo array
    if (array1.length > array2.length) {
        array3 = array3.concat(array1.slice(minLength));
    } else if (array2.length > array1.length) {
        array3 = array3.concat(array2.slice(minLength));
    }

    return array3;
}
console.log("8) "+alternarArrays([1, 2, 3],['a', 'b', 'c', 'd']));


/*9)Calcular impuestos:
Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
todo el resto un 40%. Los menores de edad no abonan impuestos.
● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100. */

function calcularImpuestos(edad,ingresos){
    var pago=0;
    //opcion 1:
    switch(true){
        case (edad>=18 && edad<=20):
            pago = ingresos*0.1;
            break;
        case edad>=21 && edad<=30:
            pago = ingresos*0.15;
            break;
        case edad>39:
            pago = ingresos*0.4;
            break;
        default:
            pago = 0;
    }
    //opcion 2 (correcta en este caso particular, porque usa RANGOS y no valores específicos):
    if (edad >= 18 && edad <= 20) {
        pago = ingresos * 0.1;
    } else if (edad >= 21 && edad <= 30) {
        pago = ingresos * 0.15;
    } else if (edad > 39) {
        pago = ingresos * 0.4;
    }

    return pago;
}
console.log("9) "+calcularImpuestos(18,1000));


/*10) Resumen de cantidad de likes:
Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.
● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”. */

function resumenLikes(likes) {
    if (likes >= 1000000) {
        return (likes / 1000000).toFixed(1) + "M";  //si es mayor, lo dividimos, lo formateamos a 1 decimal y agregamos letra
    } else if (likes >= 1000) {
        return (likes / 1000).toFixed(1) + "K";
    } else {
        return likes.toString();
    }
}
console.log("10) "+resumenLikes(1523000));