// Ejercicio 2

// Escribe una función llamada `frecuencias` que reciba una cadena de texto y retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)

//Está función se desarrolla con la lógica de crear un arreglo eliminando los espacios por cada uno de los caracteres del string, luego con el metodo forEach para recorrer vamos a crear un objeto literal que va a ir añadiendo llaves y valores por cada uno de los caracteres
function frecuencias(str){
    //Primero recibo el string y con el metodo replace elimino los espacios, luego con el metodo split convierto en un arreglo con cada caracter que tiene el string.
    let arr = str.replace(/ /g, '').split('')  
    //Luego se declara una variable objeto donde vamos a poner los elementos del array
    let obj = {}
    //Con el metodo forEach para recorrer el array decimos que cada elemento se va a convertir en una llave del objeto 'obj' y el valor se va a incrementar cada vez que encuentre esa llave.
    arr.forEach((element) => (  
        obj[element] = (obj[element]) //Con el operador condicional le inidicó que si encuentra esta llave
        ? obj[element]++ //Le aumente el valor a esta llave
        : obj[element] = 1)) //Y si no entonces solo coloque 1
    //Finalmente retornamos el objeto que se acaba de crear.
    return obj  
}

console.log(frecuencias("hola mundo"))
//{ h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }


console.log(frecuencias("anita lava la tina"))
//{ a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
